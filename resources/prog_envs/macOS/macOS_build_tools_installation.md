---
layout: noCourseNumber
title: macOS Build Tools Installation
---

This page contains a step-by-step guide to get your programming environment 
setup on macOS.
<br><br>



## Download and Install the Latest Xcode Development Tools

---

* **Step 1:** From the macOS App store, download and install Xcode. 
A link to Xcode is [here](https://apps.apple.com/us/app/xcode/id497799835?mt=12).


* **Step 2:** Run the Xcode application and agree to the license agreement 
to complete the installation process. Close Xcode.


* **Step 3:** Install the remaining development tools that you'll need for 
this course.  Open your Terminal application (Applications -> Utilities) 
and run the following command:

> ```
> sudo xcode-select --install
> ```


* **Step 4 (M1 and M2-based Macs only):** If you have an M1 or M2-based Mac, you'll 
also need to install Rosetta 2 to translate x86 instructions to ARM 
instructions. Open your Terminal application (Applications -> Utilities) 
and run the following command:

> ```
> /usr/sbin/softwareupdate --install-rosetta --agree-to-license
> ```
<br>

---

### Done.

--- 
