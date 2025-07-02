const imageLinks = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Priyanka_on_the_ramp_for_Mijwan_fashion_show.jpg/250px-Priyanka_on_the_ramp_for_Mijwan_fashion_show.jpg",
    "https://i.pinimg.com/474x/db/5a/8d/db5a8dda69da58c7229eb615d2ab98bb.jpg",
    "https://i.pinimg.com/474x/b5/8e/5e/b58e5ed2306b1525ee18053ccdc0ea87.jpg",
    "https://i.pinimg.com/736x/76/6e/0e/766e0eb0923c79a51cf34ddba5187970.jpg",
    "https://i.pinimg.com/736x/ec/87/23/ec8723f3734c3cb07ba7b4c1f7180b88.jpg",
    "https://feeds.abplive.com/onecms/images/uploaded-images/2025/02/11/c97253f78b248dff8185143034862a4c17392608515591060_original.jpeg",
    "https://i.pinimg.com/originals/d0/63/d5/d063d5a51d7f16f2aeb7e297dc46e292.jpg",
    "https://i.pinimg.com/736x/84/92/ec/8492ec5b4be2198b71849697c456e652.jpg",
    "https://i.pinimg.com/736x/23/af/28/23af28eac68580f5c346f8e6489858d9.jpg",
    "https://feeds.abplive.com/onecms/images/uploaded-images/2025/02/11/103a4e115039b2038b3f8ca389c7dbe517392609015591060_original.jpeg",
    "https://i.pinimg.com/236x/5d/b9/fc/5db9fc9aa86fef9c3fca8883c6f383ce.jpg",
    "https://i.pinimg.com/736x/8f/ab/dd/8fabdd34f6f1b933e19e43db07fce005.jpg",
    "https://i.pinimg.com/736x/79/00/78/790078748b196e8b65b22e59f91128ca.jpg",
    "https://i.pinimg.com/236x/f8/b1/8e/f8b18e4c52f684953881bd4bf55496f6.jpg",
    "https://i.pinimg.com/236x/07/eb/2d/07eb2d13cceb0eace06725cf407944cb.jpg",
    "https://i.pinimg.com/236x/8e/c5/c8/8ec5c83ab92d93735578139a12c4bbde.jpg",
    "https://www.bollywoodhungama.com/wp-content/uploads/2022/10/Sonakshi-Sinha-sparkles-in-red-embellished-sharara-cape-paired-with-hand-embroidered-blouse-worth-Rs.8-0000-1.jpg",
    "https://assets.vogue.in/photos/60ffb32f578ff515bee7df1c/2:3/w_2560%2Cc_limit/Kriti%2520Sanon.jpg",
    "https://assets.vogue.in/photos/601bfddd3514c40d2b37e596/2:3/w_2560%2Cc_limit/jacqueline%2520fernandez%2520makeup%2520skincare.jpg",
    "https://m.media-amazon.com/images/M/MV5BYTA1MTgwNTQtYTc0Ni00ZjNkLWJjYTAtNTk2MGUxZjFlMzc1XkEyXkFqcGc@._V1_.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nargis_Fakhri_walks_for_Ritu_Kumar_at_LFW_2013_%283%29_%28cropped%29.jpg",
    "https://i.pinimg.com/736x/ca/1d/a5/ca1da5ccefa04e2a59a926429527ab8b.jpg",
    "https://assets.vogue.in/photos/640b10289d73a356319b45c6/2:3/w_2560%2Cc_limit/IMG_2959.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vidya_Balan_at_Dadasaheb_Phalke_Awards.jpg",
    "https://www.brandsynario.com/wp-content/uploads/2025/04/amc-14-1.jpg",
    "https://arorakhatri.com/vip/08-11-2022_916762juhi-chawla1.jpg",
    "https://upperstall.com/wp-content/uploads/2020/05/Madhuri.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Pcu--4i_RJTWnG1Zsqdrtoc6_jbn0EAWH0v7CvkYjnN3ODdVX9Ui4rNdrstWgql-4FA&usqp=CAU",
    "https://assets.vogue.in/photos/6006ac8d251a2cf5b9cc4191/4:3/w_724,h_543,c_limit/This%20is%20how%20Bhumi%20Pednekar%20has%20stayed%20healthy%20and%20safe%20through%20the%20lockdown.jpg",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/manisha_koirala.jpeg?size=690:388",
    "https://static.toiimg.com/photo/91639831.cms?imgsize=121868",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22DxelzRIaRVsUe3xXc1BodKrqYiiukd82Q&s",
    "https://ntvb.tmsimg.com/assets/assets/1208870_v9_aa.jpg"
];

let shuffled = imageLinks.sort(() => Math.random() - 0.5);
let currentWinner = shuffled.pop(); // initial
let challenger = shuffled.pop();

function updateImages() {
    $('#img-1 img').attr('src', currentWinner);
    $('#img-2 img').attr('src', challenger);
}

function vote(winner) {
    currentWinner = winner;
    if (shuffled.length === 0) {
        alert("Your Crush is selected! Final image displayed.");
        $('#img-1 img').attr('src', currentWinner);
        $('#img-2 img').hide(); // No more challenger
        return;
    }
    challenger = shuffled.pop();
    updateImages();
}

$('#img-1').on('click', () => vote(currentWinner));
$('#img-2').on('click', () => vote(challenger));

$(document).on('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
        vote(currentWinner);
    } else if (e.key === 'ArrowRight') {
        vote(challenger);
    }
});

$('#refresh-btn').on('click', function () {
    shuffled = imageLinks.sort(() => Math.random() - 0.5);
    currentWinner = shuffled.pop();
    challenger = shuffled.pop();
    $('#img-2 img').show();
    updateImages();
});

updateImages();
