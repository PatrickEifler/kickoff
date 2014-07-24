---
layout: demo
body-class: show-grid
navgroup: demo
navactive: demogrid
title: The Kickoff Grid
prettyprint: true
---

<p>To view the grid documentation, please visit <a href="../docs/grid.html">here</a></p>

<ul class="mt2 tabs is-g-centered">
	<li>
		<a href="#standard" class="is-active">Standard Grid</a>
	</li>
	<li>
		<a href="#split">Split columns</a>
	</li>
	<li>
		<a href="#shunt">Shunt</a>
	</li>
	<li>
		<a href="#offset">Offset</a>
	</li>
	<li>
		<a href="#source-ordering">Source Ordering</a>
	</li>
	<li>
		<a href="#centered">Centered</a>
	</li>
</ul>

<div class="text-centre">
	<button id="show-grid-button" class="btn btn--primary btn--pill btn--small">Hide Grid</button>
</div>

<ul class="l-tabsContent grid-test">
	<!--  ====================  -->
	<!--  === NORMAL GRIDS ===  -->
	<!--  ====================  -->
	<li id="standard" class="is-active">
		<h2>Standard Grid</h2>
		<p>Percentage widths, set your column size by restricting the <code>.g-container</code> wrapper <code>&lt;div></code></p>

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
	</li>


	<!--  =======================  -->
	<!--  === SPLIT COLUMNS ===  -->
	<!--  =======================  -->
	<li id="split">
		<h2>Choreographic Grid #1: Split columns</h2>
		<p>On larger screens, split larger column in two, then on smaller screens split them while still keeping the overall grid.</p>

		<div class="g-row">
			<div class="g-col g-span4">
				<div class="class-tag"><code>.g-col.g-span4</code></div>
				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span8">
				<div class="class-tag"><code>.g-col.g-span8</code></div>
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
				<div class="g-row g-split">
					<div class="g-col g-span6">
						<div class="class-tag"><code>.g-col.g-span6</code></div>
						<img src="http://farm5.staticflickr.com/4094/4850624425_a5bb88e97c_z.jpg">
					</div>
					<div class="g-col g-span6">
						<div class="class-tag"><code>.g-col.g-span6</code></div>
						<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="g-row g-split">
			<div class="g-span6 g-col">
				<div class="class-tag"><code>.g-col.g-span6</code></div>
				...
			</div>
			<div class="g-span6 g-col">
				<div class="class-tag"><code>.g-col.g-span6</code></div>
				...
			</div>
		</div>

		<div class="g-row">
			<div class="g-col g-span6">
				<div class="class-tag"><code>.g-col.g-span6</code></div>
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

				<div class="g-row g-split">
					<div class="g-col g-span6">
						<div class="class-tag"><code>.g-col.g-span6</code></div>
						<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
					</div>
					<div class="g-col g-span6">
						<div class="class-tag"><code>.g-col.g-span6</code></div>
						<img src="http://farm5.staticflickr.com/4098/4850620769_06af9fa00b_z.jpg">
					</div>
				</div>

				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

			</div>
			<div class="g-col g-span6">

				<div class="g-row g-split">
					<div class="g-span6 g-col">
						<div class="class-tag"><code>.g-col.g-span6</code></div>
						<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
					</div>
					<div class="g-span6 g-col">
						<div class="class-tag"><code>.g-col.g-span6</code></div>
						<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
					</div>
				</div>

				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">

			</div>
		</div>
	</li>


	<!--  =============  -->
	<!--  === SHUNT ===  -->
	<!--  =============  -->
	<li id="shunt">
		<h2>Choreographic Grid #2: Shunt</h2>
		<p>On larger screens, allow smaller columns to site beside other column but on smaller screens 'shunt' them down below its siblings.</p>

		<div class="g-row">
			<div class="g-col g-span4 g-mq-alpha-resize-to6">
				<div class="class-tag"><code>.g-col.g-span4.g-mq-alpha-resize-to6</code></div>
				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span4 g-mq-alpha-resize-to6 g-mq-alpha-end">
				<div class="class-tag"><code>.g-col.g-span4.g-mq-alpha-resize-to6</code></div>
				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span4 g-shunt">
				<div class="class-tag"><code>.g-col.g-span4.shunt</code></div>
				<p><b>This will be shunted down to it's own row</b>. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
		</div>

		<div class="g-row">
			<div class="g-col g-span5">
				<div class="class-tag"><code>.g-col.g-span5</code></div>
				<img src="http://farm5.staticflickr.com/4098/4850620769_06af9fa00b_z.jpg">
			</div>
			<div class="g-col g-span3 g-mq-alpha-resize-to7 g-mq-alpha-end">
				<div class="class-tag"><code>.g-col.g-span3.g-mq-alpha-resize-to6.g-mq-alpha-end</code></div>
				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span4 g-shunt">
				<div class="class-tag"><code>.g-col.g-span4.g-shunt</code></div>
				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
				<p><b>This will be shunted down to it's own row</b>. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
		</div>

		<div class="g-row">
			<div class="g-col g-span6 g-mq-alpha-resize-to12">
				<div class="class-tag"><code>.g-col.g-span6.g-mq-alpha-resize-to12</code></div>
				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">
				<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
			</div>
			<div class="g-col g-span6 g-shunt">
				<div class="class-tag"><code>.g-col.g-span6.g-shunt</code></div>
				<p><b>This will be shunted down to it's own row</b>.</p>
				<div class="g-row">
					<div class="g-span6 g-col">
						<div class="class-tag"><code>.g-col.g-span6</code></div>
						<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
					</div>
					<div class="g-span6 g-col">
						<div class="class-tag"><code>.g-col.g-span6</code></div>
						<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
					</div>
				</div>

				<img src="http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg">

			</div>
		</div>
	</li>


	<!--  ==============  -->
	<!--  === OFFSET ===  -->
	<!--  ==============  -->
	<li id="offset">
		<h2>Choreographic Grid #3: Offset</h2>
		<p>Move columns to the right using <code>.g-offset*</code> classes. Each class increases the left margin of a column by a whole column. For example, <code>.offset4</code> moves <code>.span4</code> over four columns.</p>

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
	</li>


	<!--  =======================  -->
	<!--  === SOURCE ORDERING ===  -->
	<!--  =======================  -->
	<li id="source-ordering">
		<h2>Choreographic Grid #4: Source Ordering</h2>
		<p>Use <code>.g-push*</code> to push a column to the right. Use <code>.g-pull*</code> to pull column to the left.</p>

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
	</li>


	<!--  =======================  -->
	<!--  === CENTRED COLUMNS ===  -->
	<!--  =======================  -->
	<li id="centered">
		<h2>Choreographic Grid #5: Centred Columns</h2>
		<p>Add a <code>.g-centered</code>  or <code>.g-centered</code> class to each column. This also means that you can only have one column per g-row.</p>
		<div class="g-row">
			<div class="g-col g-span1 g-centered">
				<div class="class-tag"><code>.g-col.g-span1.g-centered</code></div>
				1
			</div>
		</div>
		<div class="g-row">
			<div class="g-col g-span2 g-centered">
				<div class="class-tag"><code>.g-col.g-span2.g-centered</code></div>
				2
			</div>
		</div>
		<div class="g-row">
			<div class="g-col g-span3 g-centered">
				<div class="class-tag"><code>.g-col.g-span3.g-centered</code></div>
				3
			</div>
		</div>
		<div class="g-row">
			<div class="g-col g-span4 g-centered">
				<div class="class-tag"><code>.g-col.g-span4.g-centered</code></div>
				4
			</div>
		</div>
		<div class="g-row">
			<div class="g-col g-span5 g-centered">
				<div class="class-tag"><code>.g-col.g-span5.g-centered</code></div>
				5
			</div>
		</div>
		<div class="g-row">
			<div class="g-col g-span6 g-centered">
				<div class="class-tag"><code>.g-col.g-span6.g-centered</code></div>
				6
			</div>
		</div>
		<div class="g-row">
			<div class="g-col g-span7 g-centered">
				<div class="class-tag"><code>.g-col.g-span7.g-centered</code></div>
				7
			</div>
		</div>
		<div class="g-row">
			<div class="g-col g-span8 g-centered">
				<div class="class-tag"><code>.g-col.g-span8.g-centered</code></div>
				8
			</div>
		</div>
		<div class="g-row">
			<div class="g-col g-span9 g-centered">
				<div class="class-tag"><code>.g-col.g-span9.g-centered</code></div>
				9
			</div>
		</div>
		<div class="g-row">
			<div class="g-col g-span10 g-centered">
				<div class="class-tag"><code>.g-col.g-span10.g-centered</code></div>
				10
			</div>
		</div>
		<div class="g-row">
			<div class="g-col g-span11 g-centered">
				<div class="class-tag"><code>.g-col.g-span11.g-centered</code></div>
				11
			</div>
		</div>
		<div class="g-row">
			<div class="g-col g-span12 g-centered">
				<div class="class-tag"><code>.g-col.g-span12.g-centered</code></div>
				12
			</div>
		</div>
	</li>
</ul>
