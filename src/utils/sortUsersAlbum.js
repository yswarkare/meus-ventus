const sortUsersAlbum = async (albums)  => {
    let userIds = [];
    let usersArray = [];
    for (let i_1 = 0; i_1 < albums.length; i_1++) {
        if (userIds.includes(albums[i_1].userId)) {
            let userIndex = userIds.indexOf(albums[i_1].userId);
            usersArray[userIndex].albums.push(albums[i_1]);
        } else {
            let user = {
                userId: albums[i_1].userId,
                albums: [],
            }
            user.albums.push(albums[i_1]);
            userIds.push(albums[i_1].userId);
            usersArray.push(user);
        }
    }
    // console.log(usersArray)
    return usersArray;
}

export default sortUsersAlbum;