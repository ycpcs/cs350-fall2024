---
layout: noCourseNumber
title: Linux Programming Environment (Long version)
---

This page contains a step-by-step guide through the installation of 
CentOS 7 and CLion.

<br>


### Enable virtualization in your PC BIOS/UEFI
<hr><!-- =============================================================== -->

Before you can install and run virtual machines, you must enable a feature in your
computer's BIOS/UEFI.  Most computers are shipped from the manufacturer with this feature
disabled.

**Step 1:** Reboot your computer (read **Step 2** before executing **Step 1**).

**Step 2:** Right when the computer is coming up from the black screen, press **Delete**,
**Esc**, **F1**, **F2**, or **F4** to enter the **Setup Menu**.  Each computer manufacturer
uses a different key but your computer may show a brief message at boot telling you which
key to press. If you miss it the first time, reboot and try again. It helps to tap the key
about twice a second when the computer is coming up.

**Step 3:** In the BIOS/UEFI settings, find the configuration items related to the **CPU**.
These can be found under the headings **Processor**, **Chipset**, or **Northbridge**.

**Step 4:** Enable virtualization.  The setting may be called **VT-x**, **AMD-V**,
**SVM**, or **Vanderpool**.  Enable **Intel VT-d** or **AMD IOMMU** if the options are
available.

**Step 5:** Save your changes and reboot.


<br>

### Download and install the latest version of VMWare Player. 

<hr><!-- =============================================================== -->

**Step 1:** Download the Linux CentOS 7 ISO (2009) [here](http://mirror.cs.pitt.edu/centos/7/isos/x86_64/CentOS-7-x86_64-DVD-2009.iso) (4.4 GB download)

**Step 2:** Download and install [VMWare Player (free)](https://customerconnect.vmware.com/en/downloads/details?downloadGroup=PLAYER-1556&productId=800&rPId=47861)

**Step 3:** Open VMWare Player and create a virtual machine for your 
Linux install. Configure your virtual machine with 2 CPU cores,
*at least* 4 GB of memory, and 20 GB of disk space.

**Step 4:** Set the _virtual_ optical disc drive of your virtual machine to
the Linux ISO that you downloaded in Step 1 above.

**Step 5:** Start your virtual machine and continue this guide below.


<br>

### Installing CentOS 7

<hr><br><!-- =============================================================== -->

**Step 1:** Boot Virtual machine from CentOS installation media.  
Select the "Install CentOS 7" option and press "Enter"
<br><br>
![image](centOS7_installation_images/step01.png)

<hr><br><!-- =============================================================== -->

**Step 2:** Select your language and click "Continue"
<br><br>
![image](centOS7_installation_images/step02.png)

<hr><br><!-- =============================================================== -->

**Step 3:** Click on "Software Selection" on right side.
<br><br>
![image](centOS7_installation_images/step03.png)

<hr><br><!-- =============================================================== -->

**Step 4:** In the left-hand pane, select the "GNOME Deskop".
<br><br>
![image](centOS7_installation_images/step04.png)

<hr><br><!-- =============================================================== -->

**Step 5:** In the right-hand pane, scroll down and select "Development Tools".
Click "Done" in the top left-hand corner.
<br><br>
![image](centOS7_installation_images/step05.png)

<hr><br><!-- =============================================================== -->

**Step 6:** Click on "Installation Destination". It will likely have warning icon overlay.
<br><br>
![image](centOS7_installation_images/step06.png)

<hr><br><!-- =============================================================== -->

**Step 7:** Click on your virtual hard disk drive to highlight it.
 Click it a second time to select it as the installation destination.
 Make sure your virtual hard disk drive is selected **and has a checkmark**. 
 Leave the "Partitioning" option set to "Automatically configure partitioning".
 Click "Done" in the top left-hand corner.
<br><br>
![image](centOS7_installation_images/step07.png)

<hr><br><!-- =============================================================== -->

**Step 8:** Verify that the warning overlay has disappeared from the "Installation Destination". 
 Under "Installation Destination" you should also see "Automatic partitioning selected". 
<br><br>
![image](centOS7_installation_images/step08.png)

<hr><br><!-- =============================================================== -->

**Step 9:** Click on "Network & Host Name".
<br><br>
![image](centOS7_installation_images/step09.png)

<hr><br><!-- =============================================================== -->

**Step 10:** Verify that you have an Ethernet adapter selected in the left-hand pane.
<br><br>
![image](centOS7_installation_images/step10.png)

<hr><br><!-- =============================================================== -->

**Step 11:** Click the ON/OFF toggle in the top right to enable your Ethernet adapter.
Click "Done" in the top left-hand corner.
<br><br>
![image](centOS7_installation_images/step11.png)

<hr><br><!-- =============================================================== -->

**Step 12:** Click "Being Installation".
<br><br>
![image](centOS7_installation_images/step12.png)

<hr><br><!-- =============================================================== -->

 **Step 13:** Click on "Root Password".
<br><br>
![image](centOS7_installation_images/step13.png)

<hr><br><!-- =============================================================== -->

**Step 14:** Set a root password (REMEMBER THIS PASSWORD!!!)
Click "Done" in the top left-hand corner.
<br><br>
![image](centOS7_installation_images/step14.png)

<hr><br><!-- =============================================================== -->

**Step 15:** Click "User Creation"
<br><br>
![image](centOS7_installation_images/step15.png)

<hr><br><!-- =============================================================== -->

**Step 16:** Type in your preferred username and password. 
This password need not be the same as the root password previously set.
Click "Done" in the top left-hand corner.
<br><br>
![image](centOS7_installation_images/step16.png)

<hr><br><!-- =============================================================== -->

**Step 17:** Wait patiently while the OS installs.
<br><br>
![image](centOS7_installation_images/step17.png)

<hr><br><!-- =============================================================== -->

**Step 18:** When the installation is complete, click the "Reboot" button.
<br><br>
![image](centOS7_installation_images/step18.png)

<hr><br><!-- =============================================================== -->

**Step 19:** During reboot, select the first CentOS option. Don't worry if
the screen times out and you miss it -- it's the default selection.
<br><br>
![image](centOS7_installation_images/step19.png)

<hr><br><!-- =============================================================== -->

**Step 20:** Click on "License Information" to accept the CentOS license.
<br><br>
![image](centOS7_installation_images/step20.png)

<hr><br><!-- =============================================================== -->

**Step 21:** Check the box next to "I accept the licnse agreement" to accept
the CentOS license agreement. Then click "Done" in the top left-hand corner.
<br><br>
![image](centOS7_installation_images/step21.png)

<hr><br><!-- =============================================================== -->

**Step 22:** Click "Finish Configuration" in the bottom right corner. The
machine will reboot to a logon screen.
<br><br>
![image](centOS7_installation_images/step22.png)

<hr><br><!-- =============================================================== -->

**Step 23:** Click the username that you previously created.
<br><br>
![image](centOS7_installation_images/step23.png)

<hr><br><!-- =============================================================== -->

**Step 24:** Enter the password that you created for the user (not the root password)
and click the "Sign In" button.
<br><br>
![image](centOS7_installation_images/step24.png)

<hr><br><!-- =============================================================== -->

**Step 25:** Select your language (again) and click "Next".
<br><br>
![image](centOS7_installation_images/step25.png)

<hr><br><!-- =============================================================== -->

**Step 26:** Select your keyboard layout and click "Next".

<br><br>
![image](centOS7_installation_images/step26.png)

<hr><br><!-- =============================================================== -->

**Step 27:** Enable or Disable "Location Services", your choice.
<br><br>
![image](centOS7_installation_images/step27.png)

<hr><br><!-- =============================================================== -->

**Step 28:** If so desired, you can connect your online accounts like your
YCP account.
<br><br>
![image](centOS7_installation_images/step28.png)

<hr><br><!-- =============================================================== -->

**Step 29:** You should now be DONE installing CentOS 7.
Click the "Start using CentOS Linux" button to continue.
<br><br>
![image](centOS7_installation_images/step29.png)

<hr><br><!-- =============================================================== -->

**Step 30:** Take a few minutes to poke around the Operating Sytem
and its settings.  You may need to change the resolution if you
installed the OS in a virtual machine.

<hr><br><!-- =============================================================== -->

<hr><br><!-- =============================================================== -->

<hr><br><!-- =============================================================== -->



### Installing Development Tools and Clang

<hr><br><!-- =============================================================== -->

**Step 1:** Click the "Applications" menu in the top-left corner, find and run 
the "Terminal" application.
<br><br>
![image](centOS7_package_installation_images/step01.png)

<hr><br><!-- =============================================================== -->

**Step 2a:** Determine if you already have the development tools installed by typing
```which make```
at the command line and hit enter. If you see the response ```/usr/bin/make``` then
 you already have most of the development tools installed.  Skip down to Step #5.
<br><br>
![image](centOS7_package_installation_images/step02a.png)

<hr><br><!-- =============================================================== -->

**Step 2b:** When typing ```which make```, if the response contains 
the phrase ```no make in ...``` and looks like the screenshot below
then you don't have the development tools properly installed. Continue
to Step #3.
<br><br>
![image](centOS7_package_installation_images/step02b.png)

<hr><br><!-- =============================================================== -->

**Step 3:** In the terminal, type ```su``` to switch users. The ```su``` 
command will make you the root user. Enter the **root password** when prompted.
<br><br>
![image](centOS7_package_installation_images/step03.png)

<hr><br><!-- =============================================================== -->

**Step 4:** As the root user, type the following:
```yum groupinstall development``` and hit enter.
Follow the prompts, enter a ```y``` for "Yes" when required.
When this command completes, the development tools should be 
installed. You can verify success by re-running the command from 
Step 2a.
<br><br>
![image](centOS7_package_installation_images/step04.png)

<hr><br><!-- =============================================================== -->

**Step 5:** Use the terminal to install clang. If you are not 
already the root user, type ```su``` to switch users to the root user.
Enter the **root password** when prompted.
As the root user, type the following to install clang: 
```yum install clang```.
Follow the prompts, enter a ```y``` for "Yes" when required.
When this command completes, clang should be installed.
<br><br>
![image](centOS7_package_installation_images/step05.png)

<hr><br><!-- =============================================================== -->

**Step 6:** Use the terminal to install valgrind. If you are not 
already the root user, type ```su``` to switch users to the root user.
Enter the **root password** when prompted.
As the root user, type the following to install valgrind: 
```yum install valgrind```.
Follow the prompts, enter a ```y``` for "Yes" when required.
When this command completes, clang should be installed.
<br><br>
![image](centOS7_package_installation_images/step06.png)


<hr><br><!-- =============================================================== -->

<hr><br><!-- =============================================================== -->

<hr><br><!-- =============================================================== -->



### Installing CLion

<hr><br><!-- =============================================================== -->

**Step 1:** Click the "Applications" menu in the top-left corner, find and run 
the "Firefox" web browser application.
<br><br>
![image](centOS7_clion_installation_images/step01.png)

<hr><br><!-- =============================================================== -->


**Step 2:** Download CLion from the [jetbrains website](https://www.jetbrains.com/clion/download/#section=linux).
It should download into your "Downloads" folder.
<br><br>
![image](centOS7_clion_installation_images/step02.png)

<hr><br><!-- =============================================================== -->

**Step 3:** Open the Terminal application. Type ```cd Downloads``` to change directories
to your "Downloads" directory.  If you are not already the root user, 
type ```su``` to switch users to the root user.
Enter the **root password** when prompted.
<br><br>
![image](centOS7_clion_installation_images/step03.png)

<hr><br><!-- =============================================================== -->

**Step 4:** As the root user, type the following:
```tar -xzf CLion-2018.2.tar.gz -C /opt```.
This will unpack the compressed ```tar.gz``` file into the ```/opt``` directory.
**Note:** you can speed up the typing of long filenames such 
as ```"CLion-2018.2.tar.gz"``` by typing the first few letters 
(e.g. ```"CL"```) and hitting your ```TAB``` key.
<br><br>
![image](centOS7_clion_installation_images/step04.png)

<hr><br><!-- =============================================================== -->

**Step 5:** Type ```exit``` to logout of the root user account.
<br><br>
![image](centOS7_clion_installation_images/step05.png)

<hr><br><!-- =============================================================== -->

**Step 6:** Type the following to start CLion for the first time:
```/opt/clion-2017.2.2/bin/clion.sh```.  **Don't forget to use your
```TAB``` key to speed up the typing.***
<br><br>
![image](centOS7_clion_installation_images/step06.png)

<hr><br><!-- =============================================================== -->

**Step 7:** Select "Do not import settings" and click "OK".
<br><br>
![image](centOS7_clion_installation_images/step07.png)

<hr><br><!-- =============================================================== -->

**Step 8:** Scroll to the end of the CLion User Agreement and click "Accept".
<br><br>
![image](centOS7_clion_installation_images/step08.png)

<hr><br><!-- =============================================================== -->

**Step 9:** If prompted about "Data Sharing", click "Don't Send".
<br><br>
![image](centOS7_clion_installation_images/step09.png)

<hr><br><!-- =============================================================== -->

**Step 10:** Select a theme and click "Next".
<br><br>
![image](centOS7_clion_installation_images/step10.png)

<hr><br><!-- =============================================================== -->

**Step 11:** Leave these settings at their default values and click "Next".
<br><br>
![image](centOS7_clion_installation_images/step11.png)

<hr><br><!-- =============================================================== -->

**Step 12:** Leave these settings at their default values and click "Next".
<br><br>
![image](centOS7_clion_installation_images/step12.png)

<hr><br><!-- =============================================================== -->

**Step 13:** Leave these settings at their default values and click "Next".
<br><br>
![image](centOS7_clion_installation_images/step13.png)

<hr><br><!-- =============================================================== -->

**Step 14:** Ensure the checkbox labeled "Create a desktop entry ..." is selected.
Click "Start using CLion".
<br><br>
![image](centOS7_clion_installation_images/step14.png)

<hr><br><!-- =============================================================== -->

**Step 15:** Enter the username and password for your free JetBrains
student account. Click "Activate" to continue.  If you don't yet have
your free JetBrains account, visit the [JetBrains student website](https://www.jetbrains.com/shop/eform/students)
 to create one.  Continue with this step once you've created your account.
<br><br>
![image](centOS7_clion_installation_images/step15.png)

<hr><br><!-- =============================================================== -->

**Step 16:** Admire your success and click the X to close CLion for now.
<br><br>
![image](centOS7_clion_installation_images/step16.png)

<hr><br><!-- =============================================================== -->

**Step 17:** Cleanup your "Downloads" by deleting the archive file. 
Type the following:
```rm CLion-2018.2.tar.gz```.  You can close your terminal now.
<br><br>
![image](centOS7_clion_installation_images/step17.png)

<hr><br><!-- =============================================================== -->

**Step 18:** From now on, you should be able to start CLion from 
the "Applications --> Programming" menu.
<br><br>
![image](centOS7_clion_installation_images/step18.png)

<hr><br><!-- =============================================================== -->