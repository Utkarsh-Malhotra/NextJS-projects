'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';
import { revalidatePath } from 'next/cache';

// use server directive will make all the functions in this file as server action
function isInvalidText(text) {
  return !text || text.trim() === '';
}
export async function shareMeal(prevState, formData) {
  'use server';

  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.image) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error('Invalid Input');
    return {
      message: 'Invalid Input.',
    };
  }

  await saveMeal(meal);
  revalidatePath('/meals', 'layout'); // the whole nested pages will be revalidated which means next js will throw away the previous cache pages
  redirect('/meals');
}
