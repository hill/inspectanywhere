<template lang="pug">
  article.message.is-danger
    .message-header
      p 
        slot(name='header')
    .message-body
      p 
        slot(name='message')
</template>
