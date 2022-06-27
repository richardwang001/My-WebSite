/**
 *@desc
 *@author Richard Wang
 *@date 2022/6/27 13:11
 */

import moment from 'moment';

/**
 * compare if the time greater than the latter one
 * @param dateStr1 standard dateString such as "Mon Jun 27 2022 13:22:24 GMT+0800 (China Standard Time)", "2022-6-27 12:53:23" and so on
 * @param dateStr2 standard dateString the same as above
 * @return true if the former is greater than the latter,else false
 */
export const isTimeGreater = (dateStr1:string,dateStr2:string):boolean=>{
  const date1 = Date.parse(dateStr1);
  const date2 = Date.parse(dateStr2);
  return date1>date2;
}

/**
 * compare if the time less than NOW
 * @param dateStr standard dateString such as "Mon Jun 27 2022 13:22:24 GMT+0800 (China Standard Time)", "2022-6-27 12:53:23" and so on
 * @return true if the time is expired
 */
export const isTimeExpired =(dateStr:string):boolean=>{
  const date = Date.parse(dateStr);
  const now = Date.now();
  return date<now;
}

export const dateFormatter = (dateStr:string):string => {
  return moment(new Date(dateStr)).format('YYYY-MM-DD HH:mm:ss');
}

