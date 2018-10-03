
var me = {}

var UserDatas = {
    setMyUserData: function(d) {
        me = d
    },
    getMe: function() {
        return me
    }
}

export default UserDatas;