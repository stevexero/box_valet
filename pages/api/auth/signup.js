// import { passport, generateJwt } from '../../../middleware/passport';

// export default function signUpHandler(req, res) {
//   if (req.method === 'POST') {
//     passport.initialize()(req, res, () => {
//       console.log('passport initialized from api/signup'); // Logged first, then to middleware/passport.js
//       passport.authenticate('local-signup', (err, user, info) => {
//         console.log('passport.authenticate initialized from api/signup'); // Logged third after middleware/passport.js
//         if (err) {
//           return res.status(500).json({ error: err.message });
//         }
//         if (!user) {
//           return res
//             .status(400)
//             .json({ error: info ? info.message : 'Signup failed' });
//         }

//         req.login(user, { session: false }, (loginErr) => {
//           if (loginErr) {
//             return res.status(500).json({ error: loginErr.message });
//           }
//           return res.status(201).json({
//             message: 'Signup successful',
//             user: {
//               email: user.email,
//               first_name: user.first_name,
//               last_name: user.last_name,
//               user_role: user.user_role,
//             },
//           });
//         });
//       })(req, res);
//     });
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
