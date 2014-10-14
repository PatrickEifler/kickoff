---
layout: demo
body-class: show-grid
navgroup: demo
navactive: demogrid
title: The Kickoff Grid

next:
 - title: Typography demo
   body: See our default typography styles
   link: typography.html
 - title: Forms demo
   body: See how Kickoff handles forms
   link: forms.html
---

<a name="standard"></a>

<div class="demo">
	<div class="demo-visual">
		<h2>Standard Grid</h2>
		<p>Percentage widths, set your column size by restricting the <code>.g-container</code> wrapper <code>&lt;div></code></p>
		<button class="show-grid-button btn btn--primary btn--pill btn--small">Hide Grid</button>

		<div class="g-row grid-test">
			<div class="g-col g-span3">
				<div class="class-tag"><code>.g-col.g-span3</code></div>
				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span3">
				<div class="class-tag"><code>.g-col.g-span3</code></div>
				<img src="http://farm5.staticflickr.com/4094/4850604091_63fca411ab_z.jpg">
			</div>
			<div class="g-col g-span3">
				<div class="class-tag"><code>.g-col.g-span3</code></div>
				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span3">
				<div class="class-tag"><code>.g-col.g-span3</code></div>
				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span4">
				<div class="class-tag"><code>.g-col.g-span4</code></div>
				<img src="http://farm5.staticflickr.com/4094/4850624425_a5bb88e97c_z.jpg">
			</div>
			<div class="g-col g-span4">
				<div class="class-tag"><code>.g-col.g-span4</code></div>
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span4">
				<div class="class-tag"><code>.g-col.g-span4</code></div>
				<img src="http://farm5.staticflickr.com/4094/4850624425_a5bb88e97c_z.jpg">
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span6">
				<div class="class-tag"><code>.g-col.g-span6</code></div>
				<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
			</div>
			<div class="g-col g-span6">
				<div class="class-tag"><code>.g-col.g-span6</code></div>
				<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g-row">
	<div class="g-col g-span3">
		<div class="class-tag"><code>.g-col.g-span3</code></div>
		<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
		<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
	</div>
	<div class="g-col g-span3">
		<div class="class-tag"><code>.g-col.g-span3</code></div>
		<img src="http://farm5.staticflickr.com/4094/4850604091_63fca411ab_z.jpg">
	</div>
	<div class="g-col g-span3">
		<div class="class-tag"><code>.g-col.g-span3</code></div>
		<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
		<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
	</div>
	<div class="g-col g-span3">
		<div class="class-tag"><code>.g-col.g-span3</code></div>
		<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
		<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span4">
		<div class="class-tag"><code>.g-col.g-span4</code></div>
		<img src="http://farm5.staticflickr.com/4094/4850624425_a5bb88e97c_z.jpg">
	</div>
	<div class="g-col g-span4">
		<div class="class-tag"><code>.g-col.g-span4</code></div>
		<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
	</div>
	<div class="g-col g-span4">
		<div class="class-tag"><code>.g-col.g-span4</code></div>
		<img src="http://farm5.staticflickr.com/4094/4850624425_a5bb88e97c_z.jpg">
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span6">
		<div class="class-tag"><code>.g-col.g-span6</code></div>
		<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
	</div>
	<div class="g-col g-span6">
		<div class="class-tag"><code>.g-col.g-span6</code></div>
		<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
	</div>
</div>
{% endhighlight %}
	</div>
</div>

<a name="offset"></a>

<div class="demo">
	<div class="demo-visual">
		<h2>Offset</h2>
		<p>Move columns to the right using <code>.g-offset*</code> classes. Each class increases the left margin of a column by a whole column. For example, <code>.offset4</code> moves <code>.span4</code> over four columns.</p>
		<button class="show-grid-button btn btn--primary btn--pill btn--small">Hide Grid</button>

		<div class="g-row grid-test">
			<div class="g-col g-span4">
				<div class="class-tag"><code>.g-col.g-span4</code></div>
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span4 g-offset2">
				<div class="class-tag"><code>.g-col.g-span4.g-offset2</code></div>
				<p><b>This is offset by 2 column widths</b></p>
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span5">
				<div class="class-tag"><code>.g-col.g-span5</code></div>
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span5 g-offset2">
				<div class="class-tag"><code>.g-col.g-span5.g-offset2</code></div>
				<p><b>This is offset by 2 column widths</b></p>
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span1">
				<div class="class-tag"><code>.g-col.g-span1</code></div>
				1
			</div>
			<div class="g-col g-span10 g-offset1">
				<div class="class-tag"><code>.g-col.g-span10.g-offset1</code></div>
				<p><b>This is offset by 1 column width</b></p>
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g-row">
	<div class="g-col g-span4">
		<div class="class-tag"><code>.g-col.g-span4</code></div>
		<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
	</div>
	<div class="g-col g-span4 g-offset2">
		<div class="class-tag"><code>.g-col.g-span4.g-offset2</code></div>
		<p><b>This is offset by 2 column widths</b></p>
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span5">
		<div class="class-tag"><code>.g-col.g-span5</code></div>
		<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
	</div>
	<div class="g-col g-span5 g-offset2">
		<div class="class-tag"><code>.g-col.g-span5.g-offset2</code></div>
		<p><b>This is offset by 2 column widths</b></p>
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span1">
		<div class="class-tag"><code>.g-col.g-span1</code></div>
		1
	</div>
	<div class="g-col g-span10 g-offset1">
		<div class="class-tag"><code>.g-col.g-span10.g-offset1</code></div>
		<p><b>This is offset by 1 column width</b></p>
	</div>
</div>
{% endhighlight %}
	</div>
</div>

<a name="sourceordering"></a>

<div class="demo">
	<div class="demo-visual">
		<h2>Source Ordering</h2>
		<p>Use <code>.g-push*</code> to push a column to the right. Use <code>.g-pull*</code> to pull column to the left.</p>
		<button class="show-grid-button btn btn--primary btn--pill btn--small">Hide Grid</button>

		<div class="g-row g-test">
			<div class="g-col g-span4 g-push8">
				<div class="class-tag"><code>.g-col.g-span2.g-push10</code></div>
				1st column in source, 2nd when viewed
			</div>
			<div class="g-col g-span8 g-pull4">
				<div class="class-tag"><code>.g-col.g-span10.g-pull2</code></div>
				2nd column in source, 1st when viewed
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span9 g-push3">
				<div class="class-tag"><code>.g-col.g-span3.g-push9</code></div>
				1st column
			</div>
			<div class="g-col g-span3 g-pull9">
				<div class="class-tag"><code>.g-col.g-span9.g-pull3</code></div>
				2nd column
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span4">
				<div class="class-tag"><code>.g-col.g-span4</code></div>
				1st column
			</div>
			<div class="g-col g-span3 g-push5">
				<div class="class-tag"><code>.g-col.g-span3.g-push5</code></div>
				2nd column
			</div>
			<div class="g-col g-span5 g-pull3">
				<div class="class-tag"><code>.g-col.g-span5.g-pull3</code></div>
				3rd column
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g-row">
	<div class="g-col g-span4 g-push8">
		<div class="class-tag"><code>.g-col.g-span2.g-push10</code></div>
		1st column in source, 2nd when viewed
	</div>
	<div class="g-col g-span8 g-pull4">
		<div class="class-tag"><code>.g-col.g-span10.g-pull2</code></div>
		2nd column in source, 1st when viewed
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span9 g-push3">
		<div class="class-tag"><code>.g-col.g-span3.g-push9</code></div>
		1st column
	</div>
	<div class="g-col g-span3 g-pull9">
		<div class="class-tag"><code>.g-col.g-span9.g-pull3</code></div>
		2nd column
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span4">
		<div class="class-tag"><code>.g-col.g-span4</code></div>
		1st column
	</div>
	<div class="g-col g-span3 g-push5">
		<div class="class-tag"><code>.g-col.g-span3.g-push5</code></div>
		2nd column
	</div>
	<div class="g-col g-span5 g-pull3">
		<div class="class-tag"><code>.g-col.g-span5.g-pull3</code></div>
		3rd column
	</div>
</div>
{% endhighlight %}
	</div>
</div>

<a name="centred"></a>

<div class="demo">
	<div class="demo-visual">
		<h2>Centred Columns</h2>
		<p>Add a <code>.g-col--centered</code>  or <code>.g-col--centered</code> class to each column. This also means that you can only have one column per g-row.</p>
		<button class="show-grid-button btn btn--primary btn--pill btn--small">Hide Grid</button>

		<div class="g-row grid-test">
			<div class="g-col g-span1 g-col--centered">
				<div class="class-tag"><code>.g-col.g-span1.g-col--centered</code></div>
				1
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span2 g-col--centered">
				<div class="class-tag"><code>.g-col.g-span2.g-col--centered</code></div>
				2
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span3 g-col--centered">
				<div class="class-tag"><code>.g-col.g-span3.g-col--centered</code></div>
				3
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span4 g-col--centered">
				<div class="class-tag"><code>.g-col.g-span4.g-col--centered</code></div>
				4
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span5 g-col--centered">
				<div class="class-tag"><code>.g-col.g-span5.g-col--centered</code></div>
				5
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span6 g-col--centered">
				<div class="class-tag"><code>.g-col.g-span6.g-col--centered</code></div>
				6
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span7 g-col--centered">
				<div class="class-tag"><code>.g-col.g-span7.g-col--centered</code></div>
				7
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span8 g-col--centered">
				<div class="class-tag"><code>.g-col.g-span8.g-col--centered</code></div>
				8
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span9 g-col--centered">
				<div class="class-tag"><code>.g-col.g-span9.g-col--centered</code></div>
				9
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span10 g-col--centered">
				<div class="class-tag"><code>.g-col.g-span10.g-col--centered</code></div>
				10
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span11 g-col--centered">
				<div class="class-tag"><code>.g-col.g-span11.g-col--centered</code></div>
				11
			</div>
		</div>
		<div class="g-row grid-test">
			<div class="g-col g-span12 g-col--centered">
				<div class="class-tag"><code>.g-col.g-span12.g-col--centered</code></div>
				12
			</div>
		</div>
	</div>
	<div class="demo-code">
{% highlight html %}
<div class="g-row">
	<div class="g-col g-span1 g-col--centered">
		<div class="class-tag"><code>.g-col.g-span1.g-col--centered</code></div>
		1
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span2 g-col--centered">
		<div class="class-tag"><code>.g-col.g-span2.g-col--centered</code></div>
		2
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span3 g-col--centered">
		<div class="class-tag"><code>.g-col.g-span3.g-col--centered</code></div>
		3
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span4 g-col--centered">
		<div class="class-tag"><code>.g-col.g-span4.g-col--centered</code></div>
		4
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span5 g-col--centered">
		<div class="class-tag"><code>.g-col.g-span5.g-col--centered</code></div>
		5
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span6 g-col--centered">
		<div class="class-tag"><code>.g-col.g-span6.g-col--centered</code></div>
		6
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span7 g-col--centered">
		<div class="class-tag"><code>.g-col.g-span7.g-col--centered</code></div>
		7
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span8 g-col--centered">
		<div class="class-tag"><code>.g-col.g-span8.g-col--centered</code></div>
		8
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span9 g-col--centered">
		<div class="class-tag"><code>.g-col.g-span9.g-col--centered</code></div>
		9
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span10 g-col--centered">
		<div class="class-tag"><code>.g-col.g-span10.g-col--centered</code></div>
		10
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span11 g-col--centered">
		<div class="class-tag"><code>.g-col.g-span11.g-col--centered</code></div>
		11
	</div>
</div>
<div class="g-row">
	<div class="g-col g-span12 g-col--centered">
		<div class="class-tag"><code>.g-col.g-span12.g-col--centered</code></div>
		12
	</div>
</div>
{% endhighlight %}
	</div>
</div>
