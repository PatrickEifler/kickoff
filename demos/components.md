---
layout: demo
body-class: show-grid
navgroup: demo
navactive: democomponents
title: Components

next:
 - title: Typography demo
   body: See our default typography styles
   link: typography.html
 - title: Forms demo
   body: See how Kickoff handles forms
   link: forms.html
---
<a name="buttons"></a>

<h2>Buttons</h2>
<p>Button styles can be applied to anything with the <code>.btn</code> class applied. However, typically you'll want to apply these to only <code>&lt;a></code> and <code>&lt;button></code> elements for the best rendering.</p>

<h4>Button sizes</h4>
<p>Fancy larger or smaller buttons? Add <code>.btn--large</code>, or <code>.btn--small</code> for additional sizes.</p>

<div class="demo">
	<div class="demo-visual">
		<h3>Normal buttons</h3>
		<a href="#" class="btn">Anchor</a>
		<input type="submit" value="Input (submit)" class="btn" />
		<input type="submit" value="Disabled (submit)" class="btn" disabled />

		<h3>Larger buttons</h3>
		<a href="#" class="btn btn--large">Default colour</a>
		<a href="#" class="btn btn--large btn--primary">Primary</a>

		<h3>Small buttons</h3>
		<a href="#" class="btn btn--small">Anchor</a>
		<input type="submit" value="Primary" class="btn btn--primary btn--small" />
		<input type="submit" value="Disabled" class="btn btn--small" disabled />
		<button type="reset" class="btn btn--small">Reset</button>
	</div>

	<div class="demo-code">
{% highlight html%}
<!-- Normal buttons with default colour -->
<a href="#" class="btn">Anchor</a>
<input type="submit" value="Input (submit)" class="btn" />
<input type="submit" value="Disabled (submit)" class="btn" disabled />

<!-- Larger buttons use the .btn--large modifier class -->
<a href="#" class="btn btn--large">Default colour</a>
<a href="#" class="btn btn--large btn--primary">Primary</a>

<!-- Small buttons use the .btn--small modifier class -->
<a href="#" class="btn btn--small">Anchor</a>
<input type="submit" value="Primary" class="btn btn--primary btn--small" />
<input type="submit" value="Disabled" class="btn btn--small" disabled />
<button type="reset" class="btn btn--small">Reset</button>
{% endhighlight %}
	</div>
</div>

<hr>

<a name="pillbuttons"></a>

<h2>Pill Buttons</h2>
<p>Add the <code>.btn--pill</code> class to any <code>.btn</code>.</p>
<div class="demo">
	<div class="demo-visual">
		<h4>Pill buttons</h4>
		<a href="#" class="btn btn--pill btn--primary">Pill</a>
		<a href="#" class="btn btn--pill">This is a Pill</a>
		<h2>This is <a href="#" class="btn btn--primary btn--natural btn--pill"> a pill button </a> in a heading!</h2>

		<p>This is <a href="#" class="btn btn--primary btn--natural btn--pill"> a button </a> in a paragraph!</p>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- Pill buttons use the .btn--pill modifier class -->
<a href="#" class="btn btn--pill btn--primary">Pill</a>
<a href="#" class="btn btn--pill">This is a Pill</a>

<h2>This is <a href="#" class="btn btn--primary btn--natural btn--pill"> a button </a> in a heading!</h2>

<p>This is <a href="#" class="btn btn--primary btn--natural btn--pill"> a button </a> in a paragraph!</p>
{% endhighlight %}
	</div>
</div>

<hr>

<a name="mediaobject"></a>

<h2>Media Object</h2>
<p>Place any image- and text-like content side-by-side, as per: <a href="stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code">media object</a></p>
<div class="demo">
	<div class="demo-visual">
		<div class="media">
			<div class="media-img">
				<img src="http://hhhhold.com/s">
			</div>
			<div class="media-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>
		<div class="media media--rev">
			<div class="media-body">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
			<div class="media-img">
				<img src="http://hhhhold.com/m">
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- Media element with left aligned image -->
<div class="media">
	<div class="media-img">
		<img src="http://hhhhold.com/s">
	</div>
	<div class="media-body">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</div>
</div>

<!-- Media element with right aligned image -->
<div class="media media--rev">
	<div class="media-body">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</div>
	<div class="media-img">
		<img src="hhhhold.com/m">
	</div>
</div>
{% endhighlight %}
	</div>
</div>

<hr>

<a name="fluidvideo"></a>

<h2>Fluid video</h2>
<div class="demo">
	<div class="demo-visual">
		<div class="fluidVideo">
			<iframe width="560" height="315" src="//www.youtube-nocookie.com/embed/CjB_oVeq8Lo" frameborder="0" allowfullscreen></iframe>
		</div>
	</div>
	<div class="demo-code">
{% highlight html%}
<div class="fluidVideo">
	<iframe width="560" height="315" src="//www.youtube-nocookie.com/embed/CjB_oVeq8Lo" frameborder="0" allowfullscreen></iframe>
</div>
{% endhighlight %}
	</div>
</div>

<hr>

<a name="blockgrids"></a>

<h2>Block grids</h2>
<div class="demo">
	<div class="demo-visual">
		<ul class="l-blockGrid l-blockGrid--4up l-blockGrid--2up--narrow">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
			<li>Item 4</li>
			<li>Item 5</li>
			<li>Item 6</li>
			<li>Item 7</li>
			<li>Item 8</li>
		</ul>
	</div>
	<div class="demo-code">
{% highlight html%}
<ul class="l-blockGrid l-blockGrid--4up l-blockGrid--2up--narrow">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
	<li>Item 4</li>
</ul>
{% endhighlight %}
	</div>
</div>

<hr>

<a name="lists"></a>

<h2>Lists</h2>
<div class="demo">
	<div class="demo-visual">
		<h4>Centre-aligned lists</h4>
		<ul class="l-list--centred">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
			<li>Item 4</li>
		</ul>
		<h4>Floated lists</h4>
		<ul class="l-list--floated">
			<li>Item 1</li>
			<li>Item 2</li>
			<li>Item 3</li>
			<li>Item 4</li>
		</ul>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- Centre-aligned lists -->
<ul class="l-list--centred">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
	<li>Item 4</li>
</ul>

<!-- Floated lists -->
<ul class="l-list--floated">
	<li>Item 1</li>
	<li>Item 2</li>
	<li>Item 3</li>
	<li>Item 4</li>
</ul>
{% endhighlight %}
	</div>
</div>

<hr>

<a name="tables"></a>

<h2>Tables</h2>
<div class="demo">
	<div class="demo-visual">
		<table class="table table--bordered table--striped table--hover table--rounded" cellpadding="0" cellspacing="0">
			<thead>
				<th>Table head</th>
				<th>Table head</th>
				<th>Table head</th>
			</thead>
			<tbody>
				<tr>
					<td>Table cell</td>
					<td>Table cell</td>
					<td>Table cell</td>
				</tr>
				<tr>
					<td>Table cell</td>
					<td>Table cell</td>
					<td>Table cell</td>
				</tr>
			</tbody>
			<tfoot>
				<td>Table foot</td>
				<td>Table foot</td>
				<td>Table foot</td>
			</tfoot>
		</table>
	</div>
	<div class="demo-code">
{% highlight html%}
<table class="table table--bordered table--striped table--hover table--rounded" cellpadding="0" cellspacing="0">
	<thead>
		<th>Table head</th>
		<th>Table head</th>
		<th>Table head</th>
	</thead>
	<tbody>
		<tr>
			<td>Table cell</td>
			<td>Table cell</td>
			<td>Table cell</td>
		</tr>
	</tbody>
	<tfoot>
		<td>Table foot</td>
		<td>Table foot</td>
		<td>Table foot</td>
	</tfoot>
</table>
{% endhighlight %}
	</div>
</div>

<hr>

<a name="rwdtables"></a>
<h2>Responsive tables</h2>
<div class="demo">
	<div class="demo-visual">
		<div class="tableResponsive">
			<table class="table" cellpadding="0" cellspacing="0">
				<thead>
					<th>Table Cell</th>
					<th>Table Cell</th>
					<th>Table Cell</th>
					<th>Table Cell</th>
					<th>Table Cell</th>
				</thead>
				<tbody>
					<tr>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
					</tr>
					<tr>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
					</tr>
					<tr>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
						<td>Table Cell</td>
					</tr>
				</tbody>
				<tfoot>
					<td>Table Cell</td>
					<td>Table Cell</td>
					<td>Table Cell</td>
					<td>Table Cell</td>
					<td>Table Cell</td>
				</tfoot>
			</table>
		</div>
	</div>
	<div class="demo-code">
{% highlight html%}
<div class="tableResponsive">
	<table class="table" cellpadding="0" cellspacing="0">
		<thead>
			<th>Table Cell</th>
			<th>Table Cell</th>
			<th>Table Cell</th>
			<th>Table Cell</th>
			<th>Table Cell</th>
		</thead>
		<tbody>
			<tr>
				<td>Table Cell</td>
				<td>Table Cell</td>
				<td>Table Cell</td>
				<td>Table Cell</td>
				<td>Table Cell</td>
			</tr>
		</tbody>
		<tfoot>
			<td>Table Cell</td>
			<td>Table Cell</td>
			<td>Table Cell</td>
			<td>Table Cell</td>
			<td>Table Cell</td>
		</tfoot>
	</table>
</div>

{% endhighlight %}
	</div>
</div>

<hr>

<a name="tabs"></a>

<h2>Tabs</h2>
<div class="demo">
	<div class="demo-visual">
		<!-- Default, left-aligned tabs -->
		<ul class="tabs">
			<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
			<li><a href="#tabs-example-2">Tab 2</a></li>
		</ul>
		<!-- Centre-aligned tabs -->
		<ul class="tabs tabs--alignCenter">
			<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
			<li><a href="#tabs-example-2">Tab 2</a></li>
		</ul>
		<!-- Right-aligned tabs -->
		<ul class="tabs tabs--alignRight">
			<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
			<li><a href="#tabs-example-2">Tab 2</a></li>
		</ul>
	</div>
	<div class="demo-code">
{% highlight html%}
<!-- Default, left-aligned tabs -->
<ul class="tabs">
	<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
	<li><a href="#tabs-example-2">Tab 2</a></li>
</ul>

<!-- Centre-aligned tabs -->
<ul class="tabs tabs--alignCenter">
	<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
	<li><a href="#tabs-example-2">Tab 2</a></li>
</ul>

<!-- Right-aligned tabs -->
<ul class="tabs tabs--alignRight">
	<li><a href="#tabs-example-1" class="is-active">Tab 1</a></li>
	<li><a href="#tabs-example-2">Tab 2</a></li>
</ul>
{% endhighlight %}
	</div>
</div>

