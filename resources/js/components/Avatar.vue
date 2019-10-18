<template>
    <span
        v-tooltip="tooltip ? user.name : false"
        :class="['avatar', 'd-inline-flex', 'align-items-center', 'justify-content-center', 'font-weight-bold', {small, translucent}]">
        {{ letters }}
    </span>
</template>

<script>
  export default {
    name: 'Avatar',

    props: {
      user       : {required: true, type: Object},
      small      : {required: false, default: false, type: Boolean},
      translucent: {required: false, default: false, type: Boolean},
      tooltip    : {required: false, default: true, type: Boolean},
    },

    computed: {
      letters() {
        const user = this.user
        if (!user.name) {
          return '**'
        }

        const split = user.name.split(' ')
        const first = split[0]
        const last  = split[split.length - 1]

        if (split.length === 1) {
          return first.charAt(0)
        }

        return `${first.charAt(0)}${last.charAt(0)}`
      },
    },
  }
</script>

<style scoped lang="scss">
    @import '../../sass/variables';

    .avatar {
        width: 50px;
        height: 50px;
        line-height: 50px;
        background: darken($primary, 5%);
        background: linear-gradient(lighten($primary, 5%), darken($primary, 5%));
        color: #fff;
        border-radius: 50%;
        font-size: 1.2rem;
        text-shadow: 0 2px 3px rgba(0, 0, 0, .2);

        &.small {
            width: 35px;
            height: 35px;
            line-height: 35px;
            font-size: .9rem;
        }

        &.translucent {
            text-shadow: none;
            background: rgba(0, 0, 0, .2);
        }

        a > & {
            transition: background .25s linear;

            &:hover {
                background: rgba(0, 0, 0, .5);
            }
        }

        &.avatar-navbar {
            margin-top: -6px;
        }
    }
</style>
