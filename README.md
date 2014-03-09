eventPause.js
=============

eventPause is a tiny plugin with lots of methods to control events. So whenever you want you can pause and activate any event.
<p>jQuery gave us many way to bind events and unbind it.<br>
<br>
But there some situation comes where we just want to pause event (or say unbind  it temporally). For that we unbind events and bind it again when we need. <br>
But this become painful on binding event again when there is no reference of  event handler or you don&rsquo;t have its scope, or you just don&rsquo;t know what event  handlers are assigned to a particular event.</p>
So this plugin will help you there and will give control on events in better way. 
<p>
Demo :<a href="http://ignitersworld.com/lab/eventPause.html">http://ignitersworld.com/lab/eventPause.html</a>
<br/>
<div id="pluginMethod">
<a href="#pluginMethodEx"><h3>Plugin Methods</h3></a><br />
<table width="100%" border="1">
  <thead>
  <tr>
    <td width="22%">Method</td>
    <td width="78%">Description</td>
  </tr>
  </thead>
  <tr>
    <td>pause</td>
    <td>Pause an event or group of event of element .</td>
  </tr>
  <tr>
    <td>active</td>
    <td>Active events of a element.</td>
  </tr>
  <tr>
    <td>pauseChild</td>
    <td>Pause events of that element along with events of all its descendants  elements.</td>
  </tr>
  <tr>
    <td>activeChild</td>
    <td>Active events of that element along with events of all its descendants  elements.</td>
  </tr>
  <tr>
    <td>toggle</td>
    <td>toggle the current state of a element (active to paused , paused to active)</td>
  </tr>
  <tr>
    <td>enable</td>
    <td>Enable the element to  change the current state. (does not accept second argument)</td>
  </tr>
  <tr>
    <td>disable</td>
    <td>Disbale the element to change the current state.(does not accept second argument)</td>
  </tr>
  <tr>
    <td>state</td>
    <td>Give current state of element. It will return four combination ex: paused-enabled means event is paused and state change in enabled. (does not accept second argument)</td>
  </tr>
</table>
</div>
<div>
<a href="#globalMethodEx"><h3>Global Methods</h3></a><br />
<table width="100%" border="1">
  <thead>
  <tr>
    <td width="21%">Method</td>
    <td width="79%">Description</td>
  </tr>
  </thead>
  <tr>
    <td>activeAll</td>
    <td>Active all elements which are paused using eventPause plugin.</td>
  </tr>
  <tr>
    <td>enableAll</td>
    <td>Enable all the element(in which eventpause plugin is used) to chnage the current state.</td>
  </tr>
  <tr>
    <td>disableAll</td>
    <td>Disable all the element(in which eventpause plugin is used) to chnage the current state.</td>
  </tr>
</table>
</div>
<p><br />
<div id="pluginMethodEx">
eventPause accept two parameter 1st  method and 2nd events(multiple event space seperated) where both or optional.
We will see some combination of way in which we can use this plugin. 
  <h3>Plugin Methods Example</h3><br />
  <strong>Calling without any parameter.</strong><br />
  <pre><code>
  $('.selector').eventPause();
  </code></pre>
  It will activate pause mode for all events of selector.<br />
  <br />
  <strong>Calling with only event list</strong><br />
  <pre><code>
  $('.selector').eventPause('click hover');
  </code></pre>
  It will activate toggle mode for click and hover event.<br />
  <br />
  <strong>Calling with only method</strong><br />
   <pre><code>
  $('.selector').eventPause('pause');
  </code></pre>
It will activate pause mode for all events of selector.<br />
**Other method are also called in same way.
<br />
</p>
<p><strong>Calling with method and event list</strong><br />
  <pre><code>
    $('.selector').eventPause('pause','click hover');
   </code></pre>
  It will activate pause mode  for click and hover event.<br />
** enable,disable and state method does not accept second argument.</p>
</div>
  <div id="globalMethodEx">
<h3>Global methods example</h3><br />
  <strong>Calling global method</strong><br />
  <pre><code>
  $.event.activeAll();
  </code></pre>
  Global method does not accept any argument.<br />
</div>
