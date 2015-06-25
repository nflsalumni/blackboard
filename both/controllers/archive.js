ArchiveController = AppController.extend({
  onAfterAction: function () {
    Meta.setTitle('资料库');
  }
});

CreatePostController = AppController.extend({
  onAfterAction: function () {
    Meta.setTitle('创建资料');
  }
});
