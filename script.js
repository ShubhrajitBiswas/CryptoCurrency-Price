document.addEventListener('DOMContentLoaded', function () {
    var btc = document.getElementById("bitcoin");
    var eth = document.getElementById("ethereum");
    var doge = document.getElementById("dogecoin");
    var sol = document.getElementById("solana");  // New Solana Element

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,solana&vs_currencies=usd",
        "method": "GET",
        "headers": {}
    };

    $.ajax(settings).done(function (response) {
        btc.innerHTML = response.bitcoin.usd;
        eth.innerHTML = response.ethereum.usd;
        doge.innerHTML = response.dogecoin.usd;
        sol.innerHTML = response.solana.usd;  // Update Solana Price
    });
});
