const multer = require('multer')
const path = require('path')
const { format } = require('date-fns')
const { id } = require('date-fns/locale')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const formatDate = format(new Date(), 'yyyy-mm-dd',{ locale : id})
    cb(null, `${formatDate}_${file.originalname}`)
  }
});

const upload = multer({ storage: storage });  

module.exports = upload;