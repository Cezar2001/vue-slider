new Vue ({
    el: "#app",
    data: {
        immage: [
            {
                photo: 'https://th.bing.com/th/id/OIP.NymHNT6k4ZTrI7oh1M32QAHaDe?pid=ImgDet&rs=1'
            },
            {
                photo: 'https://th.bing.com/th/id/R.0420c7716b8295235a80df8289d2e339?rik=SMKV6LNIM%2fW9Og&riu=http%3a%2f%2fwww.audicafe.it%2fwp-content%2fuploads%2f2020%2f04%2f91748591_3003198719741530_2817160248781963264_o.jpg&ehk=5njihZA9j4XhJ0gPq2iZaXi0WyWv9rFTPtkToFefaMY%3d&risl=&pid=ImgRaw&r=0'
            },
            {
                photo: 'https://th.bing.com/th/id/R.e318388beb48ac3a67d330b97556b4ae?rik=dQ0f6uzxci9p%2bQ&riu=http%3a%2f%2fwww.audicafe.it%2fwp-content%2fuploads%2f2020%2f04%2frs6-copertina.jpg&ehk=oamIqf894y6LubpJtEHT9QSuGlHUH4zTP2ViIWOaPMg%3d&risl=&pid=ImgRaw&r=0'
            },
            {
                photo: 'https://th.bing.com/th/id/R.d9c5e839adf7bfdda95df910d1872b5c?rik=ItH3si5NxHMB0A&pid=ImgRaw&r=0'
            },
            {
                photo: 'https://th.bing.com/th/id/R.b1cbe755c76770cbc9242f774a07670e?rik=ZhWBQYHtGkd29Q&riu=http%3a%2f%2fwww.exoticcarlist.com%2fblog%2fwp-content%2fuploads%2f2018%2f02%2f11.jpg&ehk=7k9ZSLxl5FIyZm%2b%2bPTysFfvqwz1xmglYo1WLKcKzf1c%3d&risl=&pid=ImgRaw&r=0'
            },
            {
                photo: 'https://www.boosted.dk/wp-content/uploads/2019/10/audi-sq8-by-abt.jpg'
            },
            {
                photo: 'https://th.bing.com/th/id/R.188e976d8d0e7f9567a6db20cb88169f?rik=Cux0T8HEwVQmfA&pid=ImgRaw&r=0'
            },
        ],
        currentIndex: 0,    
    },
    methods: {
        nextPhoto: function () {
            if(this.currentIndex < this.immage.length - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
            
        },
        prevPhoto: function () {
            if(this.currentIndex >= 1) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.immage.length - 1;
            }
        },
        currentImage: function (i) {
            this.currentIndex = i;
        }

    }
})