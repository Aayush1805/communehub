const User = require('../../models/user')
const FriendsInvitation = require('../../models/friendInvitation')
const serverStore = require('../../serverStore')

const updateFriendsPendingInvitations = async (userId) => {
    try {
        
        const pendingInvitations = await FriendsInvitation.find({
            receiverId: userId
        }).populate('senderId', '_id username email')

        // find all acitve connections of specifc userId

        const receiverList = serverStore.getActiveConnections(userId)

        const io = serverStore.getSocketServerInstance()

        receiverList.forEach(receiverSocketId => {
            io.to(receiverSocketId).emit('friends-invitations', {
                pendingInvitations: pendingInvitations ? pendingInvitations : []
            })
        })
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    updateFriendsPendingInvitations
}