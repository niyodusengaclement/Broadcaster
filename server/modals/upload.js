import _ from 'lodash';
import moment from 'moment';
import reportData from '../asset/report';

let imgName = [];
let vdName = [];

class UploadFile {
  async uploadVideos(req) {
    this.allVideos = req.files.videos;
    if (!this.allVideos) return;
    if (this.allVideos.length <= 1 || this.allVideos.length === undefined) {
      vdName = await this.allVideos.name;
      await this.allVideos.mv(`./server/uploads/${this.allVideos.name}`);
      return;
    }
    _.forEach(_.keysIn(this.allVideos), async (key) => {
      const video = await this.allVideos[key];
      await vdName.push(video.name);
      await video.mv(`./server/uploads/${video.name}`);
    });
  }

  async uploadPhotos(req) {
    this.allPhotos = req.files.images;
    if (!this.allPhotos) return;
    if (this.allPhotos.length <= 1 || this.allPhotos.length === undefined) {
      imgName = await this.allPhotos.name;
      await this.allPhotos.mv(`./server/uploads/${this.allPhotos.name}`);
      return;
    }
    _.forEach(_.keysIn(this.allPhotos), async (key) => {
      const image = await this.allPhotos[key];
      await imgName.push(image.name);
      await image.mv(`./server/uploads/${image.name}`);
    });
  }

  async saveData(req, res) {
    this.reportId = reportData.length + 1;
    await reportData.push({
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
    imgName = [];
    vdName = [];
  }
}
export default new UploadFile();
