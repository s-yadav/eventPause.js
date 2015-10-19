/*
eventPause.js v 1.0.1
Author: sudhanshu yadav
s-yadav.github.com
Copyright (c) 2013 - 2015 Sudhanshu Yadav.
Dual licensed under the MIT and GPL licenses
*/
	;(function ($, window, document, undefined) {
		$.fn.eventPause=function(method,events) {
				initialize();
				//check if method is defined
				if(!methods[method]&&(events==null)){
					events=method;
					}
				events=structureEvent(events);
			if ( methods[method] ) {
				  return methods[method].call( this,events);
				} else {
				  return methods.pause.call( this,events);
				}
			};
			
		var methods={
			pause:function(events){
				return this.each(function(){
					if(!$(this).data('iw-disable')){
						$(this).data('iw-eventactive',false);
						$._iwEventPause['assigned'].push(this);
						pauseEvent(this,events);
					}
				});
				},
			active:function(events){
				return this.each(function(){
				if(!$(this).data('iw-disable')){
					$(this).data('iw-eventactive',true);
					$._iwEventPause['assigned'].splice(this);
					activeEvent(this,events);
				}
				});
				},
			pauseChild:function(events){
				return methods[ 'pause' ].call( this.add(this.find('*')),events);
				},
			activeChild:function(events){
				return methods[ 'active' ].call( this.add(this.find('*')),events);
				},	
			enable:function(){
				//to enable pausing and unpausing temperorly
				this.data('iw-disable',false);
				},	
			disable:function(){
				//to disable pausing and unpausing temperorly
				this.data('iw-disable',true);
				},
			toggle:function(events){
				var status=	this.data('iw-eventactive');
				if(status){
					return methods[ 'active' ].call(this,events);
					}
				else{
					return methods[ 'pause' ].call( this,events);
					}	
				},
			state:function(){
				 var disable=this.data('iw-disable')?'disabled':'enabled',
				 active=this.data('iw-eventactive')==false?'paused':'active';
				 return active+'-'+disable;
				}	
			}	
		
		//globalMethod
		$.eventPause={
			activeAll:function(){
				loop('active');
				},
			//this will enable disable all pause events	
			enableAll:function(){
				loop('enable');
				},
			disableAll:function(){
				loop('disable');
				}		
			}
		
		//	internal method
		//function to run for all element in array in global methods
		function loop(type){
				if($._iwEventPause){
				var asgnd=$._iwEventPause['assigned'];
				for(var i=0;i<asgnd.length; i++){
					return methods[ type ].call( $(asgnd[i]));
					}
				}

			}
		
		//function to initialize
		function initialize(){
			if (!$._iwEventPause) {
					$._iwEventPause = {};
					$._iwEventPause['assigned']=[];
				}
			}
			
		//null function
			var nullFun=function(){}
		
		
		//function to restructure event
		function structureEvent(events){
			var eventJson=[];
			if(!events){events=''};
			if((typeof(events)=='string')&&(events!='')){
					events=events.split(' ');
			for(var i=0;i<events.length; i++){
				if(events[i]=='hover'){
					eventJson.push('hover');
					eventJson.push('mouseover');
					eventJson.push('mouseout');
					}
					else if(events[i]=='mouseenter')	{
					eventJson.push('mouseover');
					}
					else if(events[i]=='mouseleave')	{
					eventJson.push('mouseout');
					}
					else{
						eventJson.push(events[i]);
						}
					}
				events=eventJson;
				}
			return events;	
			}
			
		function getIndex(array,value){
			for(var i=0; i<	array.length; i++){
				if(array[i]==value){
					return i;
					}
				}
			return -1;	
			}
		
		//function to pasue event
		function pauseEvent(elm,eventAry){
				var events = $._data(elm, "events");
				if (events) {
					$.each(events, function(type, definition) {
						if((getIndex(eventAry,type)!=-1)||(eventAry=='')){
						$.each(definition, function(index, event) {
							if (event.handler.toString() != nullFun.toString()){
								$._iwEventPause["iw-event" + event.guid] = event.handler;
								event.handler = nullFun;
							}
						})
						}
					})
				}
			}

		//function to unpasue event
		function activeEvent(elm,eventAry){
				var events = $._data(elm, "events");
				if (events) {
					$.each(events, function(type, definition) {
						if((getIndex(eventAry,type)!=-1)||(eventAry=='')){
						$.each(definition, function(index, event) {
							if (event.handler.toString() == nullFun.toString()){
								event.handler = $._iwEventPause["iw-event" + event.guid];
							}
						})
						}
					})
				}
			
			}

		
})(jQuery, window, document);
