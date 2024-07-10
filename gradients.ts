
import { Colors } from './colors';
import { Measures } from './measures';

const brandAccent2BackgroundOpacity = {
           type: 'Linear',
            direction: {
             from: {x: 0.5, y: 0 },
             to:   {x: 0.5, y: 0.9999999999999999 },
           },
            stops: [
             {
               color: "#ebeeff",
               position: 0
             },
             {
               color: "#1134ea",
               position: 1
             },
           ],
         };
const brandAccent1BackgroundOpacity = {
           type: 'Linear',
            direction: {
             from: {x: 0.5, y: 0 },
             to:   {x: 0.5, y: 0.9999999999999999 },
           },
            stops: [
             {
               color: "#ffffff",
               position: 0
             },
             {
               color: "#d507b4",
               position: 1
             },
           ],
         };
const brandContrastBackgroundOpacity = {
           type: 'Linear',
            direction: {
             from: {x: 0.5, y: 0 },
             to:   {x: 0.5, y: 0.9999999999999999 },
           },
            stops: [
             {
               color: "#00000017",
               position: 0
             },
             {
               color: "#ffffff00",
               position: 1
             },
           ],
         };
const systemHeroOpacity = {
           type: 'Linear',
            direction: {
             from: {x: 0.5, y: 0 },
             to:   {x: 0.5, y: 0.9999999999999999 },
           },
            stops: [
             {
               color: "#00000017",
               position: 0
             },
             {
               color: "#ffffff00",
               position: 1
             },
           ],
         };


export const Gradients = {
      brandAccent2BackgroundOpacity,
      brandAccent1BackgroundOpacity,
      brandContrastBackgroundOpacity,
      systemHeroOpacity,
}