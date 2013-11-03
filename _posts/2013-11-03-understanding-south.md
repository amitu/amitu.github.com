---
layout: post
title: "Understanding South"
---
{% include JB/setup %}

Since long I have been trying to "understand" south, and since long I
have failed. South, the django based database migration system.

Finally today I spent last few hours playing with it, I think I have
understood it.

I used to get stuck at the first step. I can just not use something I do
not fully understand, and since south completely manages database,
arguably the most important part of a web application, I kind of avoided
it as much as I can.

So here is my understanding. First of all django is composed of
applications. South manages things at this application level. Each
application can be "migration enabled" or not. Getting this concept
helped me the most.

The other concept was that south does not overtake syncdb, but
"enhances" it, syncdb is still required. I had a notion otherwise, that
syncdb is no longer needed once south is used, which confused me for
quite long.

If we want to start using south, the first thing after installing it, is
adding south to INSTALLED\_APPS. Once this is done, south enhances 
syncdb command.

If we are starting a new app, we will first thing run syncdb. If we have
an existing deployed app, our database and tables are already in place.
South handles both with same ease.

What south cares about if the application is "migration enabled". What
it means is if app.migrations package exists or not. If the .migrations
package exist on any app, south enhanced syncdb leaves it alone.

What this means if if your project depends on many third party apps, you
will not have to bother with creating migrations for them. You can
always create them, in case the thirdparty app goes through db schema
changes, but lets say that never happens and third party apps are either
"stable" or they come with their own migrations package.

So everything starts with syncdb run. For every app which is not
"migration enabled", syncdb creates the tables as if south is not
present at all.

Now one of those apps are your apps, which is going to need migration.
For that app, again either tables are already present or you are going
to start from scratch. In either case we have to create "initial
migration" for the app.

When we say migration, it just means a python module in the .migrations
package. So when we create a migration, only a python module is created,
and nothing changes in database. The migration module contains how to
create table, remove tables, add/remove columns etc, to get from
original database state to next database state.

To create the initial migration, you can call **python manage.py
schemamigration app --initial**. The command should have been named
"createmigration" instead of "schemamigration". This command will create
the migrations package if it does not exist, and create a
0001\_initial.py in it, eg app/migrations/0001\_initial.py along with
app/migrations/\_\_init\_\_.py if required. This file will contain
python statements to create all tables in the app. Each app that is to
be migration enabled must have intial migration created.

Once the python module is created, we can "apply the migration", using
**python manage.py migrate app** or just **python manage.py migrate**.
This command looks for each "migration enabled" app, and looks for the
migrations each of them contains. Then it looks for a table
south\_migrationhistory which stores for each app, which migration is
already in database. It then finds all the migrations that are not in
that table and applies them in alphabetical order.

This will try to creating/removing tables or columns as needed. If we
are starting with existing tables, our 0001\_initial.py migration will
try to create tables that already exists, and will fail.

To handle this, south can "fake" a migration: **python manage.py migrate
app --fake 0001**. This will not actually create any tables etc, but
will updated the south\_migrationhistory table to say that 001 migration
has been applied.

So how do we create a migration? South can automatically create
migrations for most cases by inspecting the current state of an app
models from south\_migrationhistory database, each migration python
module btw contains a dump of entire database schema as it will be if
that migration was applied. South takes the latest state of database
from latest applied migration, and compares it with the current
models.py for the app, and automatically creates a migration when we do
**python manage.py schemamigration app --auto**. Again you can see if
the command was named createmigration, it would have been lot less
confusing.

Anyways, once we create the migration, we must apply it using "python
manage.py migrate".

Sometimes we may manually alter the database using raw SQL or other
means, in which case we must again create "initial" migration, and
"fake" it. We can do it anytime our migrations files are going out of
sync with our database.

