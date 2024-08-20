---
layout: noCourseNumber
title: Windows 10/11 WSL2, Ubuntu, and Build Tools Installation
---

This page contains a step-by-step guide through the installation of 
WSL2 on Windows 10 and Windows 11.
<br><br>



## Part 1: Enable Virtualization in your PC BIOS/UEFI

---

Before you can install and run virtual machines on your computer, you must enable a feature 
in your computer's BIOS/UEFI.  Most computers are shipped from the manufacturer with this 
feature disabled.  
<br>

### Part 1(a): Access your computer's BIOS/UEFI

---

There are multiple ways to get into your computer's BIOS/UEFI.  Select 
the method that you prefer below:

#### <u>Method #1 (any OS, tricky): Enter BIOS/UEFI during boot process</u>

* **Step 1:** Reboot your computer (read **Step 2** before executing **Step 1**).

* **Step 2:** As your computer is booting and coming up from the black screen you may see 
a manufacturer's logo and/or some text describing the memory capacity and other specifications
of your computer.  During this phase of the boot process, rapidly continue to press 
**Delete**, **Esc**, **F1**, **F2**, or **F4** to enter the **Setup Menu** (i.e. BIOS/UEFI). 
Each computer manufacturer uses a different key but your computer may show a brief message 
at boot indicating which key you need to press. You'll only have one or two seconds to 
find and press the right key so be ready!  If you see the Windows boot logo, you've already 
missed it.  You can reboot and try again or move on to Method #2/3.

 * **Step 3:** Once in your BIOS/UEFI, continue following the instructions in Part 1(b).


#### <u>Method #2 (Windows 10, easy): Enter BIOS/UEFI from Windows 10 Settings panel</u>

* **Step 1:** Find and click on the Windows logo in your taskbar then select Settings to 
open up the Settings app.

* **Step 2:** In Settings, click on "Update and Security".

* **Step 3:** Select "Recovery".

* **Step 4:** Under "Advanced startup", Click on "Restart now". This will allow you to 
reboot your computer for restoration and some configurations.

* **Step 5:** After your computer reboots, you'll see a blue background menu containing 
options like "Continue", "Troubleshoot", and "Turn off your PC". Click on "Troubleshoot".

* **Step 6:** Click on "Advanced options".

* **Step 7:** Select "UEFI Firmware Settings" and then "Restart" to enter your computer BIOS/UEFI.

* **Step 8:** Once in your BIOS/UEFI, continue following the instructions in Part 1(b).

#### <u>Method #3 (Windows 11, easy): Enter BIOS/UEFI from Windows 11 Settings panel</u>

* **Step 1:** Find and click on the Windows logo in your taskbar then select Settings to 
open up the Settings app.

* **Step 2:** In Settings, from the left sidebar, select "System".

* **Step 3:** On the "System page", click "Recovery".

* **Step 4:** In the "Recovery" menu, next to "Advanced Startup", click "Restart Now".

* **Step 5:** You may see a prompt stating, "We’ll Restart Your Device So Save Your Work". 
In this prompt, click "Restart Now" to restart your computer.

* **Step 6:** After your computer reboots, you'll see a blue background menu containing 
options like "Continue", "Troubleshoot", and "Turn off your PC". Click on "Troubleshoot".

* **Step 7:** Click on "Advanced options".

* **Step 8:** Select "UEFI Firmware Settings" and then "Restart" to enter your computer BIOS/UEFI.

* **Step 9:** Once in your BIOS/UEFI, continue following the instructions in Part 1(b).
<br><br>

### Part 1(b): Find and enable virtualization settings

---

* **Step 1:** In the BIOS/UEFI settings, find the configuration settings related to the **CPU**.
These can be found under the headings **Processor**, **Chipset**, or **Northbridge**.

* **Step 2:** Enable virtualization.  The setting may be called **VT-x**, **AMD-V**,
**SVM**, or **Vanderpool**.  Enable **Intel VT-d** or **AMD IOMMU** if the options are
available.

* **Step 3:** Save your changes and reboot. 
<br><br><br>



## Part 2: Check Windows 10 for Compatibility (not required if you're running Windows 11)

---

Before continuing, be sure to verify that you have the most recent version
of Windows 10 installed.  You can check your Windows version by holding down the **Windows 
Logo Key** and pressing **R** to open the **Run** dialog box. In the **Run** 
dialog box type **winver**, and select **OK**. 

At minimum, you must have version **2004** with **Build 19041** installed before continuing. 
If you are running a version number lower than **2004 / Build 19041** run Windows Update 
until no more updates are available and then continue with this guide.
<br><br><br>



## Part 3: Install WSL2 and an Ubuntu 20.04 LTS Virtual Machine

---

This guide was developed using [Microsoft's official documentation here](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
It is recommended that you follow along with THIS guide as it includes some additional 
steps beyond what the Microsoft guide provides. These additional steps will ensure that 
you install all the packages required for your YCP CS courses.

* **Step 1:** Open the Windows **Command Prompt** as an Administrator by typing **cmd** 
into the search box in the Windows taskbar.  You should see the option to 
**Run as Administrator** on the right-hand side of the search results. Click on 
**Run as Administrator** to open the Windows **Command Prompt**.  When the **User Account 
Control** prompt asks "Do you want to allow this app to make changes to your device", 
click **Yes**.

* **Step 2:** To install WSL2 along with Ubuntu Linux 20.04 LTS run the following 
command in your newly opened **Command Prompt** window.

> ```
> wsl --install -d Ubuntu-20.04
> ```

* **Step 3:** Close the **Command Prompt** window and restart your computer.  After your 
computer restarts you should see the Linux installation running.  Let the installer 
finish.  
    * Do NOT close the terminal window while the installation is running.  
    * Do NOT click anywhere in the terminal window as this will put the terminal window 
    into a "text-selection mode".  While in "text-selection mode", the terminal will not
    update and will not appear to make any progress.  So, your installation may be complete,
    but you won't know.  If you accidentally clicked in the terminal window, you can exit
    "text-selection mode" by simple pressing your **Enter** key. 
    <br><br>

* **Step 4:** When the installer finishes, you should see a prompt in your new Linux 
terminal to "Enter new UNIX username". Here, you will need to create a username and 
password.  This is NOT the same username and password that you use to log into Windows. 
This account is specifically for the Linux virtual machine.  However, you can 
certainly use the same username and password for Windows and your Linux VM if 
you like. **Create your Linux username and password to finalize the installation.**
<br><br><br>



## Part 4: Install Build Tools (Required packages for CS350, CS420, etc.)

---

* **Step 1:** Your Linux VM should still be running. If not, you can restart your Linux 
VM by running it from the Windows Start/Applications menu. Copy and paste the following 
command into your new **Linux terminal** to update the package manager. You will be 
prompted for the password that you recently created for this Linux VM. Enter your password
to proceed.

> ```
> sudo apt-get -y update
> ```


* **Step 2:** Copy and paste the following line into your new **Linux terminal** 
to install required build tools and packages. This may take a few minutes.

> ```
> sudo apt-get -y install build-essential
> ```


* **Step 3:** Copy and paste the following line into your new **Linux terminal** 
to install the remaining required packages. This may take a few minutes.

> ```
> sudo apt-get -y install make cmake gcc clang gdb valgrind curl wget git perl zip
> ```


* **Step 4:** Copy and paste the following line into your new **Linux terminal** to ensure 
that your Windows and Linux filesystems and applications can interact properly.

> ```
> sudo wget -O /etc/wsl.conf https://raw.githubusercontent.com/jmoscola/wsl-conf-file/master/wsl.conf
> ```


<br>


---

## Congratulations, you’re now running Linux in Windows.

--- 
