import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as xml2js from 'xml2js'
import {News} from "../model/News";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-noutati',
  templateUrl: './noutati.component.html',
  styleUrls: ['./noutati.component.scss']
})
export class NoutatiComponent implements OnInit {

  items:any;

  constructor(private http: HttpClient) {

  }

ngOnInit(): void {
    let language = localStorage.getItem('language');
      if(language==='Română'){
        this.loadXML('assets/xml/Noutati.xml')
      }
      else if(language==='English'){
        this.loadXML('assets/xml/News.xml')
      }
  }

  loadXML(path:string) {
    this.http.get(path,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
        responseType: 'text'
      })
      .subscribe(async data => {
        this.parseXML(data).then(async data => {
          this.items = await data;
        })
      })
  }

  parseXML(data){
    return new Promise(resolve => {
      let k :string | number,
        array: News[] = [],
        parser = new xml2js.Parser({
          trim:true,
          explicitArray: true
        });
      parser.parseString(data, function (err,result){
        let obj = result.News;
        for(k in obj.Card){
          let item = obj.Card[k];
          let news:News = {
            titlu: item.titlu[0],
            id: item.id[0],
            suprafata: item.suprafata[0],
            camere: item.camere[0],
            img: []
          }
          news.img = [];
          for(let i of item.img[0].path){
            news.img.push(i)
          }
          array.push(news);
        }
        resolve(array);
      })
    })
  }
}
