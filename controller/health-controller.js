class HealthController {
  check(req, res, next) {
    res.status(200).json({ status: 'OK' });
  }
}

module.exports = new HealthController();
