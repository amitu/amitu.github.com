---
layout: page
title: "MumPy Attendees"
description: ""
---
{% include JB/setup %}

{% raw %}

<!--

This is using google spreadsheet/drive. Data is stored in a public spreadsheet.
Entered using google form. I access it using their jsonp api using angularjs,
another google library and plot it via google chart api.

Source: https://raw.github.com/amitu/amitu.github.com/master/mumpy.md
        https://github.com/amitu/amitu.github.com/blob/master/javascripts/mumpy.js

-->

<div ng-controller="MumPyGD" class="ng-cloak">
    <dl ng-repeat="row in gd" class="user_{{ row.username }}" style="margin-bottom: 0px;">
        <dt>{{ row.name }}</dt>
        <dd ng-show="row.username">
            {{ row.username }}<span ng-show="row.personalwebsite">, 
            per: <a href="{{ row.personalwebsite }}" target="_blank">{{ row.personalwebsite_d }}</a></span><span ng-show="row.startupwebsite">, 
            sup: <a href="{{ row.startupwebsite }}" target="_blank">{{ row.startupwebsite_d }}</a></span>,<span ng-show="row.keywordlearn">
            kl: <span ng-repeat="kl in row.keywordlearn.split(',')" class="kw_{{ kl }} keyword kl">{{ kl }}, </span></span><span ng-show="row.keywordwork">
            kw: <span ng-repeat="kw in row.keywordwork.split(',')" class="kw_{{ kl }} keyword kw">{{ kw }}, </span></span>
            <a 
                class="edit" title="Yes you can edit, be good." 
                href="{{ row.edit_link }}"
            >edit</a>.
        </dd>
    </dl>
    
    <div style="margin-top: 20px; margin-bottom: 15px;">
        <a href="" ng-click="refresh()">Refresh</a> |
        <a href="#" class="add_self">Add yourself</a> |
        (MumPy: <a href="http://mumpy.org/wiki/Main_Page" target="_blank">wiki</a>,
        <a href="http://groups.google.com/group/mumpy" target="_blank">mailing list</a>) | 
		<a href="https://docs.google.com/spreadsheet/ccc?key=0AurZRRemURREdF8zMWsxMHpIRVNMQ0EwREJjcnpXQVE#gid=0" target="_blank">Raw Data</a>
    </div>

    <h3>Keyword Work</h3>
    <p>What people know.</p>
    <dl 
        ng-repeat="kw in kws" class="kw_{{ kw.kw }}" 
        style="margin-bottom: 0px;">
        <dt>{{ kw.kw }}</dt>
        <dd>
            {{ kw.users.length }}: 
            <span ng-repeat="u in kw.users">{{ u }} </span>
        </dd>
    </dl>
    
    <h3 style="margin-top: 15px;">Keyword Learn</h3>
    <p>What people want to learn.</p>
    <dl 
        ng-repeat="kw in kls" class="kw_{{ kw.kw }}" 
        style="margin-bottom: 0px;">
        <dt>{{ kw.kw }}</dt>
        <dd>
            {{ kw.users.length }}: 
            <span ng-repeat="u in kw.users">{{ u }} </span>
        </dd>
    </dl>
    
    
    <h3 style="margin-top: 15px;">Day Preference</h3>
    <div id="chart_day" style="height: 300px;"> </div>

    <h3 style="margin-top: 15px;">Date Preference</h3>
    <div id="chart_date" style="height: 300px;"> </div>
    
    <h3 style="margin-top: 15px; clear: both;">Location Preference</h3>
    <div id="chart_loc" style="height: 300px;"> </div>
    
</div>
{% endraw %}

<link rel="stylesheet" type="text/css" href="/javascripts/jquery.fancybox-1.3.4.css" media="screen" />
<script src="/javascripts/jquery.min.js"> </script>
<script src="/javascripts/angular.min.js"> </script>
<script src="/javascripts/jquery.fancybox-1.3.4.js"> </script>
<script src="https://www.google.com/jsapi"> </script>
<script src="/javascripts/mumpy.js"> </script>

