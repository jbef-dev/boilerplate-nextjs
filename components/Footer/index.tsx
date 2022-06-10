// import Image from 'next/image'
// import { theme } from '../../styles/theme'
//
// interface IFooterContact {
//   [key: string]: string
// }
//
// const footerContact: IFooterContact = {
//   addr: 'C/ Pedro Lorca 29, 3rd floor',
//   addr2: 'Torrevieja - 03181',
//   addr3: 'Alicante (Spain)',
//   telf1: '+34 711 01 12 93',
//   email: 'info@cnglawyers.com',
// }
//
// interface IFooterCol {
//   title: string
//   links: { label: string; link: string }[]
// }
//
// const footerCols: IFooterCol[] = [
//   {
//     title: 'Services',
//     links: [
//       { label: 'Conveyancing', link: '/services' },
//       { label: 'Inheritance', link: '/services' },
//       { label: 'Legal Representation', link: '/services' },
//       { label: 'Tax Advice', link: '/services' },
//     ],
//   },
//   {
//     title: 'About us',
//     links: [{ label: 'About us', link: '/about-us' }],
//   },
//   {
//     title: 'Contact us',
//     links: [
//       { label: 'Reach out to us', link: '/contact' },
//       { label: 'Whatsapp', link: '/contact' },
//     ],
//   },
// ]
//
// export const Footer = () => {
//   return (
//     <footer
//       sx={{
//         height: theme.custom.footer.height,
//         py: theme.custom.spacing.sm,
//         backgroundColor: theme.palette.grey[100],
//         color: theme.palette.grey[500],
//       }}
//     >
//       <div
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'space-evenly',
//           maxWidth: theme.breakpoints.values.xl,
//           height: '100%',
//         }}
//       >
//         <div
//           sx={{
//             display: 'flex',
//             width: '100%',
//             alignItems: 'center',
//             justifyContent: { xs: 'center', md: 'space-around' },
//           }}
//         >
//           <div
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: theme.custom.spacing.md,
//             }}
//           >
//             <div
//               sx={{
//                 width: '150px',
//               }}
//             >
//               <Image
//                 alt='CNG Lawyers logo'
//                 src='/logo.svg'
//                 loading='lazy'
//                 width='128px'
//                 height='50px'
//               />
//             </div>
//             <div>
//               {Object.values(footerContact).map((val, i) => (
//                 <span key={i}>{val}</span>
//               ))}
//             </div>
//           </div>
//           <div
//             sx={{
//               display: { xs: 'none', md: 'flex' },
//               flexWrap: 'wrap',
//               gap: theme.custom.spacing.lg,
//             }}
//           >
//             {footerCols.map((col, i) => (
//               <div key={i}>
//                 <span
//                   sx={{
//                     fontWeight: 700,
//                   }}
//                 >
//                   {col.title}
//                 </span>
//                 {col.links.map((link, j) => (
//                   <span key={j}>{link.label}</span>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div variant='middle' sx={{ alignSelf: 'stretch' }} />
//         <span
//           sx={{
//             color: theme.palette.grey[700],
//             whiteSpace: 'nowrap',
//             minWidth: 'max-content',
//           }}
//         >
//           © 2022 Designed by: J. Befán - All rights reserved.
//         </span>
//       </div>
//     </footer>
//   )
// }
export {}
