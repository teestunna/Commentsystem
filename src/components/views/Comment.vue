<template>
    <div>
        <li class="posted-comment" v-for="commentDetail in commentDetail" :key="commentDetail.id"
        @mouseover="hoverIn()" @mouseout="hoverOut()">
            <div class="comment-user-avatar"><img :src="commentDetail.img_url"></div>
            <div class="comment-user-details">
                <span class="distinct-user-name">{{ commentDetail.name}}</span>
                <span class="distinct-user-title">{{ commentDetail.user }}</span>
                <span class="full-stop">.</span>
                <span class="distinct-time-stamp">{{ commentDetail.time}}</span>
            </div>
            <div class="comment-info-block-wrapper">
                <div id="distinct-user-comment">
                    {{ commentDetail.text}}
                </div>
            </div>
            <div class="comment-interactive">
                <span class="reply-text" v-bind:style="{color: presColor}">REPLY</span>
                <span class="reply-count" v-bind:style="{color: presColor}">{{ commentDetail.replies }} REPLIES</span>
                <span class="like-count" v-on:click="increaseLikes" v-bind:style="{color: presColor}">
                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                    {{ commentDetail.likes }}
                </span>
                <span class="dislike-count" v-on:click="decreaseLikes" v-bind:style="{color: presColor}">
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    {{ commentDetail.dislikes }}
                </span>
            </div>
        </li>
    </div>
</template>

<script>
export default {
    name: 'Comment',
    props: {
        commentDetail: Array // Comment details getting passed from the parent component as props
    },
    data() {
        return {
            presColor: "#A0A0A0"
        }
    },
    methods: {
        // Increase the likes on click
        increaseLikes: function() {
            this.commentDetail.forEach((value) =>{
               return value.likes+=1;
            });
        },
        // Increase the dislikes on click
        decreaseLikes: function() {
            this.commentDetail.forEach((value) => {
                return value.dislikes+=1;
            });
        },
        // On hover change the color of particilar divs( reply, likes, dislikes )
        hoverIn() {
            return this.presColor = '#282828';
        },
        // On mouse out change the color of particilar divs( reply, likes, dislikes )
        hoverOut() {
            return this.presColor = '#A0A0A0';
        }
    }
}
</script>

<style scoped>

    .posted-comment {
        border-top: 1px solid #dedede;
        margin-left: 275px;
        width: 48.5em;
        height: 9em;
        list-style-type: none;
        list-style: none;
        padding: 1.0rem 1.5rem;
        font-size: 16px;
        border-bottom: 1px solid #dedede;
        display: grid;
        grid-template-columns: auto auto;
    }

    img {
        width: 50px;
        height: 50px;
    }

    .comment-user-avatar {
        grid-row: 1/4;
    }

    .comment-user-details {
        display: block;
        margin-top: 7px;
    }

    #distinct-user-name {
        font-weight: bold;
        float: left;
        margin-left: 15px;
        font-size: 17px;
        color: black;
        font-weight: bold;
    }

    .full-stop {
        float: left;
        margin-left: 8px;
        top: 25%;
        -ms-transform: translate(-25%, -25%);
        transform: translate(-25%, -25%);
    }

    .distinct-user-title {
        margin-left: 8px;
        float: left;
        border-radius: 15px;
        text-align: center;
        padding-top: 3px;
        width: 70px;
        height: 18px;
        background-color: #303030;
        color: white;
        font-size: 11.2px;
        font-weight: bold;
    }

    .distinct-time-stamp {
        float: left;
        margin-left: 4px;
        font: 13px Arial;
        color: #737373;
        margin-top: 2px;
        font-size: 11px;
        color: #A0A0A0
    }

    .comment-info-block-wrapper {
        margin: 0;
        width: calc(100% - 170px) !important;
        font-family: Arial;
        font-size: inherit;
        display: block;
    }

    .distinct-user-comment{
        margin-left: 15px;
        text-align: left;
        line-height: 25px;
    }

    .reply-text {
        float: left;
        margin-left: 15px;
        font-size: 11px;
    }

    .reply-count {
        float: left;
        margin-left: 15px;
        font-size: 11px;
        cursor: pointer;
    }

    .like-count {
        float: left;
        margin-left: 15px;
        font-size: 11px;
        cursor: pointer;
    }

    .dislike-count {
        float: left;
        margin-left: 15px;
        font-size: 11px;
        cursor: pointer;
    }
</style>