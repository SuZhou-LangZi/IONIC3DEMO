import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoragService {

  constructor(public http: HttpClient) { }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    console.log(key);
    return localStorage.getItem(key);
  }

  public getService(): Promise<any>{
    let sResult ;
    let headers = new Headers({ 'Content-Type': 'application/json' });

    let params = {
      "deviceType": "Android", 
      "RequestParams": { "UserId": "8911609", "UserPwd": "000000als", "UUID": "00:9a:cd:50:dd:42", "WorkType": "010", "SystemType": "010" }
    };

    return this.http.post("http://192.168.69.155:8085/NRFPhoneServer/JSONService?method=work_tips",
      params).toPromise().then(res => {
        console.log(res);
        console.log('获取数据并返回给请求者！');
      }); 
  }

  public getData(url, params, loading, timeout?, header?): Promise<any> {
    
    params = {
      "deviceType": "Android", 
      "RequestParams": { "UserId": "8911609", "UserPwd": "000000als", "UUID": "00:9a:cd:50:dd:42", "WorkType": "010", "SystemType": "010" }
    };

    const reqUrl = "http://192.168.69.155:8085/NRFPhoneServer/JSONService?method=work_tips";
    return this.http.post(reqUrl, params).toPromise().then(res => {
      console.log(res);
      console.log('放单给请求用户!');
    });
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }

}
