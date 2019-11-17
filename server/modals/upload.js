import _ from 'lodash';
import moment from 'moment';
import reportData from '../asset/report';

let imgName = [];
let vdName = [];

class UploadFile {
  uploadVideos(req) {
<<<<<<< HEAD
=======
    vdName = [];
>>>>>>> 268a6166e794630ed8c498ac736478449f160999
    this.allVideos = req.files.videos;
    if (!this.allVideos) return;
    if (this.allVideos.length <= 1 || this.allVideos.length === undefined) {
      this.allVideos.mv(`./server/uploads/${this.allVideos.name}`);
      vdName = this.allVideos.name;
      return;
    }
    _.forEach(_.keysIn(this.allVideos), (key) => {
      const video = this.allVideos[key];
      video.mv(`./server/uploads/${video.name}`);
      vdName.push(video.name);
    });
  }

  uploadPhotos(req) {
<<<<<<< HEAD
=======
    imgName = [];
>>>>>>> 268a6166e794630ed8c498ac736478449f160999
    this.allPhotos = req.files.images;
    if (!this.allPhotos) return;
    if (this.allPhotos.length <= 1 || this.allPhotos.length === undefined) {
      this.allPhotos.mv(`./server/uploads/${this.allPhotos.name}`);
      imgName = this.allPhotos.name;
      return;
    }
    _.forEach(_.keysIn(this.allPhotos), (key) => {
      const image = this.allPhotos[key];
      image.mv(`./server/uploads/${image.name}`);
      imgName.push(image.name);
    });
  }

  saveData(req, res) {
    this.reportId = reportData.length + 1;
    reportData.push({
      id: this.reportId,
      title: req.body.title,
      type: req.body.type,
      createdOn: moment().format('MMMM Do YYYY, h:mm:ss a'),
      createdBy: req.user.id,
      comment: req.body.comment,
      location: req.body.location,
      status: 'pending',
      images: imgName,
      videos: vdName,
      tag: req.body.tag,
    });
    res.status(201).json({
      status: 201,
      data: {
        id: this.reportId,
        message: 'Created red-flag record',
      },
    });
<<<<<<< HEAD
    imgName = [];
    vdName = [];
=======
>>>>>>> 268a6166e794630ed8c498ac736478449f160999
  }
}
export default new UploadFile();
