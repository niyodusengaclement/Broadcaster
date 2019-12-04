import _ from 'lodash';
import moment from 'moment';
import db from './db';


let imgName = [];
let vdName = [];

class UploadFile {
  uploadVideos(req) {
    this.allVideos = req.files.videos;
    if (!this.allVideos) return;
    if (this.allVideos.length <= 1 || this.allVideos.length === undefined) {
      vdName = this.allVideos.name;
      this.allVideos.mv(`./server/uploads/${this.allVideos.name}`);
      return;
    }
    _.forEach(_.keysIn(this.allVideos), (key) => {
      const video = this.allVideos[key];
      vdName.push(video.name);
      video.mv(`./server/uploads/${video.name}`);
    });
  }

  uploadPhotos(req) {
    this.allPhotos = req.files.images;
    if (!this.allPhotos) return;
    if (this.allPhotos.length <= 1 || this.allPhotos.length === undefined) {
      imgName = this.allPhotos.name;
      this.allPhotos.mv(`./server/uploads/${this.allPhotos.name}`);
      return;
    }
    _.forEach(_.keysIn(this.allPhotos), (key) => {
      const image = this.allPhotos[key];
      imgName.push(image.name);
      image.mv(`./server/uploads/${image.name}`);
    });
  }

  async saveData(req, res) {
    const text = `INSERT INTO reports (title, type, createdOn, createdBy, comment, location, status, images, videos, tag)
    values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *`;
    const values = [
      req.body.title,
      req.body.type,
      moment().format('MMMM Do YYYY, h:mm:ss a'),
      req.user.id,
      req.body.comment,
      req.body.location,
      'pending',
      imgName,
      vdName,
      req.body.tag,
    ];
    try {
      const { rows } = await db.query(text, values);
      res.status(201).json({
        status: 201,
        message: 'Created red-flag record',
        data: {
          id: rows[0].id,
          title: rows[0].title,
          type: rows[0].type,
          createdOn: rows[0].createdon,
        },
      });
      imgName = [];
      vdName = [];
    } catch (err) {
      res.status(500).json({
        status: 500,
        error: 'Internal Server Error',
      });
    }
  }
}
export default new UploadFile();
