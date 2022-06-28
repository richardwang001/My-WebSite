/**
 *@desc
 *@author Richard Wang
 */
export interface IDInfo {
  birthDay:string,
  age:number,
  sex:string
}

/**
 * 根据身份证号计算生日，年龄和性别
 * @param identityNo 身份证号字符串 必须要输入正确的身份证号 18或15位
 * @return IDInfo 身份证信息：
 *   birthDay:出生日期,
 *   age:年龄,
 *   sex:性别
 */
export const computeIDInfo = (identityNo:string):IDInfo => {
  const birthDay=getBirthday(identityNo);
  const age = getAge(identityNo);
  const sex = getSex(identityNo);
  return {
    birthDay: birthDay,
    age: age,
    sex: sex
  } as IDInfo;
};

/**
 * 通过身份证号码查出生日期
 * @param  idCard 身份证号字符串
 */
const getBirthday = (idCard:string) => {
  let birthday = "";
  if (idCard !== null && idCard !== "") {
    if (idCard.length === 15) {
      birthday = "19" + idCard.substr(6, 6);
    } else if (idCard.length === 18) {
      birthday = idCard.substr(6, 8);
    }

    birthday = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
  }
  return birthday;
};

/**
 * 通过身份证判断性别
 * @param idCard: 身份证号码 idCard
 */
const getSex = (idCard:string) => {
  let sexStr: string;
  if (parseInt(idCard.slice(-2, -1)) % 2 === 1) {
    sexStr = "男";
  } else {
    sexStr = "女";
  }
  return sexStr;
};

/**
 * 通过身份证号计算年龄
 * @param idCard 身份证号
 */
const getAge = (idCard:string) => {
  let len = (idCard + "").length;
  if (len === 0) {
    return 0;
  } else {
    if (len !== 15 && len !== 18) {
      //身份证号码只能为15位或18位其它不合法
      return 0;
    }
  }
  let strBirthday = "";
  if (len === 18) {
    //处理18位的身份证号码从号码中得到生日和性别代码
    strBirthday =
      idCard.substr(6, 4) +
      "/" +
      idCard.substr(10, 2) +
      "/" +
      idCard.substr(12, 2);
  }
  if (len === 15) {
    strBirthday =
      "19" +
      idCard.substr(6, 2) +
      "/" +
      idCard.substr(8, 2) +
      "/" +
      idCard.substr(10, 2);
  }
  //时间字符串里，必须是“/”
  let birthDate = new Date(strBirthday);
  let nowDateTime = new Date();
  let age = nowDateTime.getFullYear() - birthDate.getFullYear();
  //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
  if (
    nowDateTime.getMonth() < birthDate.getMonth() ||
    (nowDateTime.getMonth() === birthDate.getMonth() &&
      nowDateTime.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};