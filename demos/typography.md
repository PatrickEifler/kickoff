---
layout: demo
navgroup: demo
navactive: demotype
title: Typography

next:
 - title: Components demo
   body: See the components that are included with Kickoff
   link: components.html
 - title: Forms demo
   body: See how Kickoff handles forms
   link: forms.html
---
<h1>Heading 1 <small>small</small></h1>
<h2>Heading 2</h2>
<p>Donec sed odio dui. Curabitur <a href="">blandit tempus</a> porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<h3>Heading 3</h3>
<p>Donec sed odio dui. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras <a href="">mattis consectetur purus</a> sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<h4>Heading 4</h4>
<p>Donec sed odio dui. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante <a href="">venenatis dapibus</a> posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<h5>Heading 5</h5>
<p>Donec sed odio dui. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
<h6>Heading 6</h6>
<p>Donec sed odio dui. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>

<hr>

<h3>Text-level semantics</h3>

<div class="row">
	<div class="span6 col">
		<p>
			The <a href="#">a element</a> example<br>
			The <abbr title="Title text">abbr element</abbr> example<br>
			The <b>b element</b> example<br>
			The <cite>cite element</cite> example<br>
			The <code>code element</code> example<br>
			The <del>del element</del> example<br>
			The <dfn>dfn element</dfn> example<br>
			The <em>em element</em> example<br>
			The <i>i element</i> example<br>
			The img element <img src="http://placekitten.com/16/16" alt=""> example<br>
			The <ins>ins element</ins> example<br>
			The <kbd>kbd element</kbd> example
		</p>
	</div>
	<div class="span6 col">
		<p>
			The <mark>mark element</mark> example<br>
			The <q>q element <q>inside</q> a q element</q> example <br>
			The <s>s element</s> example<br>
			The <samp>samp element</samp> example<br>
			The <small>small element</small> example<br>
			The <span>span element</span> example<br>
			The <strike>strike element</strike> example<br>
			The <strong>strong element</strong> example<br>
			The <sub>sub element</sub> example<br>
			The <sup>sup element</sup> example<br>
			The <var>var element</var> example<br>
			The <u>u element</u> example
		</p>
	</div>
</div>

<hr>

<div class="demo">
	<div class="demo-visual">
		<h3>Blockquote</h3>
		<blockquote>
			<p>Of all the gin joints in all the towns in all the world, she walks into mine.</p>
			<small>Rick Blaine</small>
		</blockquote>
	</div>
	<div class="demo-code">
{% highlight html%}
<blockquote>
	<p>Of all the gin joints in all the towns in all the world, she walks into mine.</p>
	<small>Rick Blaine</small>
</blockquote>
{% endhighlight %}
	</div>
</div>

<hr>

<h3>Ordered list</h3>

<ol class="normal">
	<li>list item 1</li>
	<li>list item 1
	<ol>
		<li>list item 2</li>
		<li>list item 2
		<ol>
			<li>list item 3</li>
			<li>list item 3</li>
		</ol>
		</li>
		<li>list item 2</li>
		<li>list item 2</li>
	</ol>
	</li>
	<li>list item 1</li>
	<li>list item 1</li>
</ol>

<hr>

<h3>Unordered list</h3>

<ul class="normal">
	<li>list item 1</li>
	<li>list item 1
	<ul>
		<li>list item 2</li>
		<li>list item 2
		<ul>
			<li>list item 3</li>
			<li>list item 3</li>
		</ul>
		</li>
		<li>list item 2</li>
		<li>list item 2</li>
	</ul>
	</li>
	<li>list item 1</li>
	<li>list item 1</li>
</ul>

<hr>

<h3>Definition list</h3>

<dl>
	<dt>Definition name</dt>
	<dd>Definition value</dd>
	<dt>Definition name</dt>
	<dd>Definition value</dd>
	<dd>Definition value</dd>
	<dt>Definition name</dt>
	<dt>Definition name</dt>
	<dd>Definition value</dd>
</dl>
