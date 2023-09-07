const { pool } = require("../connect");

exports.getUsers = async () => {
  try {
    const result = await pool.query("SELECT * FROM users");
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};
exports.getUserById = async (userId) => {
  try {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [userId]);
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

// exports.getUser = (dbName, dbEmail, dbPhone) => {
//   const result = pool.query(`select * from users where name= '${dbName}' or email= '${dbEmail}' or phone= '${dbPhone}'`)
//   // console.log({result});   
//   if (result) {
//     return result.rows;
    
//   }
// }
exports.getUserName = async( dbName )  => {
  const result = await pool.query(`select name from users where name= '${dbName}'`)
  console.log({result});   
  if (result) {
    // console.log(result.rows[0]);
    return result.rows.length > 0;  
  }
}
exports.getUserEmail = async( dbEmail )  => {
  const result = await pool.query(`select email from users where email= '${dbEmail}'`)
  console.log({result});   
  if (result) {
    // console.log(result.rows[0]);
    return result.rows.length > 0;  
  }
}
exports.getUserPhone = async( dbPhone )  => {
  const result = await pool.query(`select phone from users where phone= '${dbPhone}'`)
  console.log({result});   
  if (result) {
    // console.log(result.rows[0]);
    return result.rows.length > 0;  
  }
}
// exports.getUserPhone = (dbPhone) => {
//   const result = pool.query(`select * from users where phone= '${dbPhone}'`)
//   console.log({result});   
//   if (result) {
//     // console.log(result.rows[0]);
//     return result.rows;
    
//   }
// }

exports.postUser = async (name, email, phone, password, img_url) => {
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, phone, password, img_url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, email, phone, password, img_url]
    );

    if (result) {
      return result.rows;
    }

  } catch (error) {

    console.log(error);
  }
};

exports.updateUser = async (userId, name, email, phone, img_url) => {
  const query = `
    UPDATE users
    SET name = $1, email = $2, phone = $3, img_url = $4
    WHERE id = $5
    RETURNING *;
  `;
  const values = [name, email, phone, img_url, userId];
  
  try {
    const result = await pool.query(query, values);
    console.log('Update Result:', result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.error('Update Error:', error);
    throw error;
  }
}; 
// exports.updateUser = async (name, email, phone, password, img_url, id) => {
//   try {
//     const result = await pool.query(
//       "UPDATE users SET name=$1, email=$2, phone=$3, password=$4, img_url=$5 where id=$6 RETURNING *",
//       [name, email, phone, password, img_url, id]
//     );
//     if (result) {
//       return result.rows;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.deleteUser = async (id) => {
  try {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getUserByEmail = async () => {
  try {
    const result = await pool.query("SELECT * FROM users where email");
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};