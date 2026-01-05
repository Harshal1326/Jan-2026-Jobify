import jwt from 'jsonwebtoken';

/**
 * Creates a JWT token with a 1-day expiration
 * @param {Object} payload - Data to encode in the token (e.g., userId, role)
 * @returns {string} JWT token
 */
export const createJWT = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d', // hardcoded 1 day expiration to avoid env parsing issues
  });
};

/**
 * Verifies a JWT token
 * @param {string} token - JWT token to verify
 * @returns {Object} Decoded payload
 */
export const verifyJWT = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};




// import jwt from 'jsonwebtoken';

// export const createJWT = (payload) => {
//   const token = jwt.sign(payload, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES_IN,
//   });
//   return token;
// };

// export const verifyJWT = (token) => {
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   return decoded;
// };
