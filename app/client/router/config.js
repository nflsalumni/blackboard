Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  yieldTemplates: {
    header: {
      to: 'header'
    },
    footer: {
      to: 'footer'
    }
  },
  onBeforeAction: function() {
    return $('meta[name^="description"]').remove();
  }
});
