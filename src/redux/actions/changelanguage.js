export const CHANGELANGUAGE = 'CHANGELANGUAGE';
export function changelanguage(language){
    return {
        type: CHANGELANGUAGE,
        payload:{
            language: language,
        }
    }
}