---
layout: page
title: "MumPy Attendees"
description: ""
---
{% include JB/setup %}

{% literal %}
<div ng-controller="MumPyGD" class="ng-cloak">
    <dl ng-repeat="row in gd" class="user_{{ row.username }}" style="margin-bottom: 0px;">
        <dt>{{ row.name }}</dt>
        <dd ng-show="row.username">
            {{ row.username }}<span ng-show="row.personalwebsite">, 
            per: <a href="http://{{ row.personalwebsite }}" target="_blank">{{ row.personalwebsite }}</a></span><span ng-show="row.startupwebsite">, 
            sup: <a href="http://{{ row.startupwebsite }}" target="_blank">{{ row.startupwebsite }}</a></span>,<span ng-show="row.keywordlearn">
            kl: <span ng-repeat="kl in row.keywordlearn.split(',')" class="kw_{{ kl }} keyword kl">{{ kl }}, </span></span><span ng-show="row.keywordwork">
            kw: <span ng-repeat="kw in row.keywordwork.split(',')" class="kw_{{ kl }} keyword kw">{{ kw }}, </span></span>
            <a 
                class="edit" title="Yes you can edit, be good." 
                href="{{ row.edit_link }}"
            >edit</a>
        </dd>
    </dl>
    
    <div style="margin-top: 20px; margin-bottom: 15px;">
        <a href="" ng-click="refresh()">Refresh</a> | 
        <a href="#" class="add_self">Add Your Self</a>
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
    
    <h3 style="margin-top: 15px; clear: both;">Location Preference</h3>
    <div id="chart_loc" style="height: 300px;"> </div>
    
</div>
{% endliteral %}

<link rel="stylesheet" type="text/css" href="/javascripts/jquery.fancybox-1.3.4.css" media="screen" />
<script src="/javascripts/jquery.min.js"> </script>
<script src="/javascripts/angular.min.js"> </script>
<script src="/javascripts/jquery.fancybox-1.3.4.js"> </script>
<script src="https://www.google.com/jsapi"> </script>
<script src="/javascripts/mumpy.js"> </script>

