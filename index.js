$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
				anchors: ['video', 'module', '3rdPage', '4thpage', 'lastPage'],
				scrollingSpeed: 1000,
				lazyLoading:true
			});
		});