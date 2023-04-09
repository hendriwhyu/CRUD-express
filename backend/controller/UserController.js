import User from "../model/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const saveUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const insertUser = await user.save();
    res.status(201).json(insertUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;

    // Update data pengguna
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, {
      new: true,
    });

    // Cek apakah data pengguna berhasil diperbarui
    if (!updatedUser) {
      return res.status(404).send({ message: "Data pengguna tidak ditemukan" });
    }

    res
      .status(200)
      .send({
        message: "Data pengguna berhasil diperbarui",
        user: updatedUser,
      });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Hapus data pengguna
    const deletedUser = await User.findByIdAndDelete(userId);

    // Cek apakah data pengguna berhasil dihapus
    if (!deletedUser) {
      return res.status(404).send({ message: "Data pengguna tidak ditemukan" });
    }

    res
      .status(200)
      .send({ message: "Data pengguna berhasil dihapus", user: deletedUser });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
