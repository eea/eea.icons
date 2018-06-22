=========
EEA Icons
=========
.. image:: https://ci.eionet.europa.eu/buildStatus/icon?job=eea/eea.icons/develop
  :target: https://ci.eionet.europa.eu/job/eea/job/eea.icons/job/develop/display/redirect
  :alt: develop
.. image:: https://ci.eionet.europa.eu/buildStatus/icon?job=eea/eea.icons/master
  :target: https://ci.eionet.europa.eu/job/eea/job/eea.icons/job/master/display/redirect
  :alt: master

Introduction
============
Font Awesome icons for Plone and EEA packages

.. note ::

  This add-on doesn't do anything by itself. It needs to be integrated by a
  developer within your own products. For reference you can check
  the `eea.progressbar`_ package.


.. contents::


Main features
=============

1. Register `Font Awesome icons`_ into Plone CSS registry
2. Register `Font Awesome Animation`_ into Plone CSS registry


Install
=======

- Add eea.icons to your eggs section in your buildout and re-run buildout.
  You can download a sample buildout from
  https://github.com/eea/eea.icons/tree/master/buildouts/plone4
- Install eea.icons within Site Setup > Add-ons

Getting started
===============

Simply use the <span> tag with specific classes as following::

  <span class="eea-icon eea-icon-camera-retro"></span>

And for animated icons::

  <span class="eea-icon eea-icon-heart eea-icon-anim-burst animated"></span>


You can use the entire set of `Font Awesome icons`_ .
Font Awesome gives you scalable vector icons that can instantly be
customized - size, color, drop shadow, and anything that can be done with
the power of CSS.

There are many ways to customise the icons display. See the `practical examples`_
and just replace the generic **fa-** classname with our **eea-icon-**
class prefix and for font awesome animated icons replace **faa-** classname with
our **eea-icon-anim-** class prefix.


Source code
===========

- Latest source code (Plone 4 compatible):
  https://github.com/eea/eea.icons


Copyright and license
=====================
The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

The EEA Icons (the Original Code) is free software;
you can redistribute it and/or modify it under the terms of the GNU
General Public License as published by the Free Software Foundation;
either version 2 of the License, or (at your option) any later
version.

More details under docs/License.txt


Funding
=======

EEA_ - European Environment Agency (EU)

.. _EEA: https://www.eea.europa.eu/
.. _`eea.progressbar`: https://eea.github.io/docs/eea.progressbar
.. _`practical examples`: http://fontawesome.io/examples/
.. _`Font Awesome icons`: http://fontawesome.io/icons/
.. _`Font Awesome Animation`: http://l-lin.github.io/font-awesome-animation/
