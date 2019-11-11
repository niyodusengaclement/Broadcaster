import _ from 'lodash';
import moment from 'moment';
import reportData from '../asset/report';

const upload = (req) => {
  const allVideos = req.files.videos;
  const allPhotos = req.files.images;
  let imgName = [];
  let vdName = [];

  const uploadVideos = () => {
    // upload videos
    if (allVideos.length <= 1 || allVideos.length === undefined) {
      allVideos.mv(`./server/uploads/${allVideos.name}`);
      vdName = allVideos.name;
      return {};
    }
    _.forEach(_.keysIn(allVideos), (key) => {
      const video = allVideos[key];
      video.mv(`./server/uploads/${video.name}`);
      vdName.push(video.name);
    });
    return {};
  };

  const uploadPhotos = () => {
    // Capture images uploaded by user
    if (allPhotos.length <= 1 || allPhotos.length === undefined) {
      allPhotos.mv(`./server/uploads/${allPhotos.name}`);
      imgName = allPhotos.name;
      return {};
    }

    _.forEach(_.keysIn(allPhotos), (key) => {
      const image = allPhotos[key];
      image.mv(`./server/uploads/${image.name}`);
      imgName.push(image.name);
    });
    return {};
  };

  const saveData = () => {
    const reportId = reportData.length + 1;
    reportData.push({
      id: reportId,
      title: req.body.title,
      type: req.body.type,
      createdOn: moment().format('MMMM Do YYYY, h:mm:ss a'),
      createdBy: req.user.id,
      comment: req.body.comment,
      location: req.body.location,
      status: 'test',
      images: imgName,
      videos: vdName,
      tag: req.body.tag,
    });
  };
  if (!allPhotos) {
    uploadVideos();
    saveData();
  }
  if (!allVideos) {
    uploadPhotos();
    saveData();
  }
  if (allVideos && allPhotos) {
    uploadPhotos();
    uploadVideos();
    saveData();
  }
};
export default upload;
