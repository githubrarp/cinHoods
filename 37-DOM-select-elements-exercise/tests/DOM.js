document.body.innerHTML = `
    <h1>Title</h1>
    <h2>Sub title</h2>
	<div class="text">
		<p class="text text-1" id="textId-1">Item 1</p>
		<p class="text text-2 green" id="textId-2">Item 2</p>
		<p class="text text-3" id="textId-3">Item 3</p>
		<p class="text">Item 4</p>
		<p class="text text-5 green" id="textId-5">Item 5</p>
		<p class="text text-6" id="textId-6">Item 6</p>
	</div>
	<ul class="links">
		<li><a href="https://test-1.com">Link 1</a></li>
		<li data-community-name="codersinhoods"><a href="https://test-2.com">Link 2</a></li>
		<li class="test"><a href="https://test-3.com">Link 3</a></li>
		<li id="test-4"><a href="https://test-4.com">Link 4</a></li>
		<li id="test-5"><a href="https://test-5.com">Link 5</a></li>
		<a class="test" href="https://codersinhoods.dev"></a>
	</ul>
	<a href="https://google.com" data-community-name="codersinhoods">External link</a>
`;
