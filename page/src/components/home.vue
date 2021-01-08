<template>

	<div>
        <h1 class="header-text">{{brandName}}</h1>
		<section>
			<div class="pink"></div>
			<div class="img-container">
				<img src="@/assets/images/image.jpg" alt="image" class="image" />
			</div>
			<div class="hot-pink">
				<div class="icons">
					<a :href="`https://www.instagram.com/${instagramPageLink}`" target="_blank" class="instagram">
						<img src="@/assets/images/instagram.svg" alt="" />
					</a>
					<a :href="`https://www.twitter.com/${twitterPageLink}`" target="_blank" class="twitter">
						<img src="@/assets/images/twitter.svg" alt="" />
					</a>
					<a :href="`https://www.snapchat.com/${snapchatPageLink}`" target="_blank" class="snapchat">
						<img src="@/assets/images/snapchat.svg" alt="" />
					</a>
					<a :href="`https://www.email.com/${emailPageLink}`" target="_blank" class="mail">
						<img src="@/assets/images/mail.svg" alt="" />
					</a>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user_details: {},
		};
	},
	mounted() {
		this.getData();
	},

computed:{
    instagramPageLink() {
        return this.user_details?.social_media?.instagram
        },
         twitterPageLink() {
        return this.user_details?.social_media?.twitter
        },
          snapchatPageLink() {
        return this.user_details?.social_media?.snapchat
        },
          emailPageLink() {
        return this.user_details?.social_media?.email
        },
          brandName() {
        return this.user_details?.name
        }
},
methods: {
		getData() {
			fetch('https://hirng-x2021.glitch.me/api', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((resp) => resp.json())
				.then((d) => {
					console.log(d);
					this.user_details = d;
				});
		},
	},
};
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
.container {
	position: relative;
	color: white;
}
.round-image {
	height: 50px;
	width: 50px;
	border-radius: 50%;
}
.image {
	width: 650px;
	height: 550px;
}
.pink {
	width: 49%;
	height: 830px;
	display: inline-block;
	background-color: #980147;
	margin: 0;
}
.hot-pink {
	width: 50%;
	position: relative;
	display: inline-block;
	background-color: #c3015c;
	height: 830px;
	margin: 0;
}
.header-text{
	left: 43%;
	position: absolute;
	top: 5%;
	z-index: 1;
}
footer {
	left: 38%;
	position: absolute;
	bottom: 5%;
	display: flex;
	align-items: center;
}
.section {
	width: 100%;
	display: flex;
	text-align: center;
}
.img-container {
	position: absolute;
	left: 30%;
	top: 15%;
	z-index: 1;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
	-moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
	-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
	-o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}
.icons {
	position: absolute;
	display: flex;
	flex-direction: column;
	right: 5%;
	top: 40%;
}
a {
	cursor: pointer;
}
footer a {
	margin: 0 15px;
	text-decoration: none;
	color: white;
}
</style>
