---
layout: noCourseNumber
title: Linux Programming Environment (Short version)
---

This page contains a **SHORT** step-by-step guide through the installation of CentOS 7 and CLion
for those familiar with virtual machines and Linux.  If you're unfamiliar with either, 
use the longer, more detailed guide located [here](centOS7_install.html).

<br>

<hr><!-- =============================================================== -->

  1. Download and install the latest version of [VMWare Player](https://customerconnect.vmware.com/en/downloads/details?downloadGroup=PLAYER-1556&productId=800&rPId=47861)
  2. Install [CentOS 7](http://mirror.cs.pitt.edu/centos/7/isos/x86_64/CentOS-7-x86_64-DVD-2009.iso) in VMWare Player
  3. **Install "Development Tools" during CentOS installation**
  4. If you forget to install development tools, type the following in the terminal as the root user:
     <br>```yum groupinstall 'Development Tools'```
  5. Install ```clang``` by typing the following in the terminal as the root user:
     <br>```yum install clang```
  6. Install ```valgrind``` by typing the following in the terminal as the root user:
     <br>```yum install valgrind```
  7. Download and install [CLion](https://www.jetbrains.com/clion/)