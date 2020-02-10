import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SharedDataService} from '../shared-data.service';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-session-recording-page',
  templateUrl: './session-recording-page.page.html',
  styleUrls: ['./session-recording-page.page.scss'],
})
export class SessionRecordingPagePage implements OnInit {

sessionData: object;
sessionid: string;
topicName: string;
recordStarted : boolean = false;
  constructor(public router: Router, private route: ActivatedRoute, private sharedDataSevice: SharedDataService, translate: TranslateService) { 
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    console.log(translate);
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('hi');
  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      console.log("params",params);      
      this.sessionid = params['sessionid'];
      const filteredData = this.sharedDataSevice.getSessionById(this.sessionid);
      this.sessionData = (filteredData.length>0) ? filteredData[0] : null;
       this.topicName = params['topicname'];
    })
  }

  saveRecording() {
    if(this.recordStarted) {
    this.sharedDataSevice.updateSessionTopicData(this.sessionid, this.topicName, "filename");
    this.router.navigate(['/sessiondetails', this.sessionid]);
  }

  }

  startRecording() {
    this.recordStarted = true;
  }
}
