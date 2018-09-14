/**
 * 用户信息对象
 */
export class UserInfo {
    constructor(
        public userID: String,
        public userName: String,
        public passaord: String,
        public email: String,
        public age: String,
        public sally: String,
        public sex: String,
        public color: String
    ) {
    }
}

export class CustomerInfo {
    constructor(
        public customerID: String,
        public customerName: String,
        public customerInfo: UserInfo[]
    ) {
    }
}
