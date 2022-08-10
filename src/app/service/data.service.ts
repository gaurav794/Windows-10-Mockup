import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { TaskbarIcons, DesktopIcons } from '../component/desktop/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentTimeDate: Date | undefined;
  time: any;
  date: any;
  images: TaskbarIcons[]
  icons: DesktopIcons[];

  constructor() {
    this.images = [];
    this.icons = [];
  }

  getCurrentTime() {
    this.currentTimeDate = new Date();
    return {
      time: formatDate(this.currentTimeDate, 'h:mm', 'en-US'),
      date: formatDate(this.currentTimeDate, 'EEEE, MMMM dd', 'en-US'),
      timeAMPM: formatDate(this.currentTimeDate, 'h:mm a', 'en-US'),
      dateTime: formatDate(this.currentTimeDate, 'EEEE, MMMM d, yyyy', 'en-US'),
    };
  }

  getTaskbarIcons() {
    return this.images = [
      {
        name: 'snipping-tool',
        alt: 'Snipping Tool Application',
        tooltip: 'Snipping Tool'
      },
      {
        name: 'notepad',
        alt: 'Notepad Application',
        tooltip: 'Notepad'
      },
      {
        name: 'explorer',
        alt: 'File Explorer Application',
        tooltip: 'Windows Explorer'
      },
      {
        name: 'outlook',
        alt: 'Outlook Application',
        tooltip: 'Outlook'
      },
      {
        name: 'brave',
        alt: 'Brave Browser',
        tooltip: 'Brave'
      },
      {
        name: 'vs-code',
        alt: 'Visual Studio Code Software',
        tooltip: 'VS Code'
      },
      {
        name: 'zoom',
        alt: 'Zoom Meeting Software',
        tooltip: 'Zoom'
      },
      {
        name: 'intellij',
        alt: 'Jetbrains IntelliJ IDEA Application',
        tooltip: 'IntelliJ IDEA 2021.3.2'
      }
    ];
  }

  getTaskBarHiddenIcons() {
    return this.images = [
      {
      name: 'bluetooth',
      alt: 'Bluetooth To Connect Devices',
      tooltip: 'Bluetooth Devices'
    },
    {
      name: 'nvidia',
      alt: 'Nvidia Graphics Settigs',
      tooltip: 'NVIDIA Settings'
    },
    {
      name: 'dolby',
      alt: 'Dolby Atmos Settings',
      tooltip: 'Dolby Audio'
    },
    {
      name: 'intel-graphics',
      alt: 'Intel Graphics Logo',
      tooltip: 'Intel Graphics Setting'
    },
    {
      name: 'intel',
      alt: 'Intel Drivers Updater',
      tooltip: 'Intel® Driver Support Assitant'
    },
    {
      name: 'acer-care-center',
      alt: 'Acer Care Center Software',
      tooltip: 'Acer Care Center'
    },
    {
      name: 'teams',
      alt: 'Microsoft Teams Application',
      tooltip: 'Microsoft Teams Settings'
    }
  ];
  }

  getDesktopIcons() {
    return this.icons = [
      {
        name: 'brave',
        displayName: 'Brave',
        alt: 'Brave Browser Application',
        tooltip: 'Brave Browser'
      },
      {
        name: 'cmd',
        displayName: 'CMD',
        alt: 'Command Prompt Application',
        tooltip: 'Command Prompt'
      },
      {
        name: 'discord',
        displayName: 'Discord',
        alt: 'Discord Application',
        tooltip: 'Discord'
      },
      {
        name: 'intellij',
        displayName: 'IntelliJ IDEA',
        alt: 'Jetbrains IntelliJ Application',
        tooltip: 'IntelliJ IDEA 2021.3.2'
      },
      {
        name: 'notepad++',
        displayName: 'angular tips.txt',
        alt: 'Notepad++ Application',
        tooltip: 'Notepad'
      },
      {
        name: 'word',
        displayName: 'notes.docx',
        alt: 'Microsoft Word Application',
        tooltip: 'Team Viewer'
      },
      {
        name: 'postman',
        displayName: 'Postman',
        alt: 'Postman Software',
        tooltip: 'Postman'
      },
      {
        name: 'recycle-bin',
        displayName: 'Recycle Bin',
        alt: 'Recycle Bin',
        tooltip: 'Contains the files and folders that you have deleted.'
      },
      {
        name: 'notepad++',
        displayName: 'testing.txt',
        alt: 'Notepad++ Application',
        tooltip: 'Notepad'
      },
      {
        name: 'team-viewer',
        displayName: 'Team Viewer',
        alt: 'Team Viewer Application',
        tooltip: 'Team Viewer'
      },
      {
        name: 'teams',
        displayName: 'Microsoft Teams',
        alt: 'Microsoft Teams Application',
        tooltip: 'Teams'
      },
      {
        name: 'word',
        displayName: 'resume.docx',
        alt: 'Microsoft Word Application',
        tooltip: 'Team Viewer'
      }
    ];
  }

}
