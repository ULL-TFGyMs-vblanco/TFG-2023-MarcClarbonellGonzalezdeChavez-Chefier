import { Card } from '../../components/ui/Card';
import styles from 'src/styles/recipe/RecipePage.module.css';
import Image from 'next/image';
import { Title } from '../../components/ui/Title';
import { Avatar } from '../../components/ui/Avatar';
import { BiTimeFive, BiEditAlt } from 'react-icons/bi';
import { Review } from '../../components/recipe/Review';
import TimeAgo from 'javascript-time-ago';
import Link from 'next/link';
import { Button } from '../../components/ui/Button';
import { useShow } from '../../hooks/useShow';
import ReactStars from 'react-stars';
import { GrStar } from 'react-icons/gr';
import {
  BsBookmarkFill,
  BsFillPersonFill,
  BsFillTrashFill,
  BsHeartFill,
} from 'react-icons/bs';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { useRecipe } from '@/hooks/useRecipe';
import { useRouter } from 'next/router';
import { Loading } from '@nextui-org/react';
import { Ingredient, Instruction, ValidUpdate, Valoration } from 'recipe-types';
import { useLoggedUser } from '../../hooks/useLoggedUser';
import RecipeService from '@/services/RecipeService';
import { useSWRConfig } from 'swr';
import { useSession } from 'next-auth/react';

const timeAgo = new TimeAgo('es-ES');

const RecipePage = () => {
  const { show, toggleShow } = useShow();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState();
  const [reviewTitle, setReviewTitle] = useState();
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const { recipe, isLoading, isError } = useRecipe(router.query.id as string);
  const { user, isLoading: loggedUserIsLoading } = useLoggedUser();
  const { data: session } = useSession();

  const updateHandler = async (update: ValidUpdate) => {
    try {
      await RecipeService.updateRecipe(`/recipe/${recipe._id}`, update);
      mutate('/recipe/' + recipe._id);
    } catch (error) {
      console.log(error);
    }
  };

  const likeHandler = () => {
    if (recipe.likes.includes(user.username)) {
      recipe.likes = recipe.likes.filter(
        (like: string) => like !== user.username
      );
    } else {
      recipe.likes.push(user.username);
    }
    updateHandler({ likes: recipe.likes });
  };

  const saveHandler = () => {
    if (recipe.saved.includes(user.username)) {
      recipe.saved = recipe.saved.filter(
        (save: string) => save !== user.username
      );
    } else {
      recipe.saved.push(user.username);
    }
    updateHandler({ saved: recipe.saved });
  };

  const valorationHandler = () => {
    if (
      recipe.valorations.some(
        (valoration: any) =>
          valoration.user.name === user.username ||
          valoration.user.name === user.nickname
      )
    ) {
      recipe.valorations = recipe.valorations.filter(
        (valoration: any) =>
          valoration.username !== user.username &&
          valoration.username !== user.nickname
      );
    } else {
      recipe.valorations.push(
        comment
          ? {
              user: {
                name: user.nickname ? user.nickname : user.username,
                image: user.image,
              },
              title: reviewTitle,
              rating: rating,
              date: Date.now(),
              comment: comment,
            }
          : {
              user: {
                name: user.nickname ? user.nickname : user.username,
                image: user.image,
              },
              title: reviewTitle,
              rating: rating,
              date: Date.now(),
            }
      );
      toggleShow();
    }
    updateHandler({ valorations: recipe.valorations });
  };

  const commentHandler = (e: any) => {
    setComment(e.target.value);
  };

  const titleHandler = (e: any) => {
    setReviewTitle(e.target.value);
  };

  const getAverageRating = (valorations: Valoration[]) => {
    const average =
      valorations.reduce(
        (acc: number, valoration: Valoration) => acc + valoration.rating,
        0
      ) / valorations.length;
    return isNaN(average) ? 0 : average;
  };

  const isAlreadyValorated = (valorations: Valoration[]) => {
    return valorations.some(
      (valoration: Valoration) =>
        valoration.user.name === user.username ||
        valoration.user.name === user.nickname
    );
  };

  return (
    <Card style={styles.card} testid='form-card'>
      <div className={styles.container}>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <Title>Oops! Ha ocurrido un error al cargar la receta</Title>
        ) : (
          recipe && (
            <>
              <div className={styles.top__section}>
                <div className={styles.left__subsection}>
                  <Title style={styles.title}>{recipe.name}</Title>
                  <div className={styles.field} data-testid='form-field'>
                    <div className={styles.user__info}>
                      <Avatar
                        source={recipe.user.image}
                        username={recipe.user.name}
                        link={`/${recipe.user.name}`}
                        size={30}
                        style={styles.avatar}
                      />
                      <Link
                        href={`/${recipe.user.name}`}
                        className={styles.user__name}
                      >
                        <p>@{recipe.user.name}</p>
                      </Link>
                      <p>
                        &middot;&nbsp;&nbsp;
                        {timeAgo.format(Date.parse(recipe.date))}
                      </p>
                    </div>
                  </div>
                  <div className={styles.field} data-testid='form-field'>
                    <p>{recipe.description}</p>
                  </div>
                  <div className={styles.field} data-testid='form-field'>
                    <div className={styles.tags__container}>
                      {recipe.tags.breakfast && (
                        <Link href={'/?tag=breakfast'}>
                          <label className={styles.tag}>Desayuno</label>
                        </Link>
                      )}
                      {recipe.tags.lunch && (
                        <Link href={'/?tag=lunch'}>
                          <label className={styles.tag}>Almuerzo</label>
                        </Link>
                      )}
                      {recipe.tags.dinner && (
                        <Link href={'/?tag=dinner'}>
                          <label className={styles.tag}>Cena</label>
                        </Link>
                      )}
                      {recipe.tags.dessert && (
                        <Link href={'/?tag=dessert'}>
                          <label className={styles.tag}>Postre</label>
                        </Link>
                      )}
                      {recipe.tags.snack && (
                        <Link href={'/?tag=snack'}>
                          <label className={styles.tag}>Picoteo</label>
                        </Link>
                      )}
                      {recipe.tags.drink && (
                        <Link href={'/?tag=drink'}>
                          <label className={styles.tag}>Bebida</label>
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className={styles.stats}>
                    <div className={styles.stat} data-testid='form-field'>
                      <p className={styles.field__title}>Valoración</p>
                      <div className={styles.stat__data}>
                        <GrStar className={styles.star__icon} size={20} />
                        <p className={styles.stat__number}>
                          {getAverageRating(recipe.valorations)}
                        </p>
                      </div>
                    </div>
                    <hr className={styles.stats__divider} />
                    <div className={styles.stat} data-testid='form-field'>
                      <p className={styles.field__title}>Tiempo</p>
                      <div className={styles.stat__data}>
                        <BiTimeFive className={styles.clock__icon} />
                        <p className={styles.stat__number}>
                          {recipe.cookTime}min
                        </p>
                      </div>
                    </div>
                    <hr className={styles.stats__divider} />
                    <div className={styles.stat} data-testid='form-field'>
                      <p className={styles.field__title}>Dificultad</p>
                      <p>{recipe.difficulty}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.right__subsection}>
                  <div className={styles.field} data-testid='form-field'>
                    <div className={styles.image__container}>
                      <Image
                        src={recipe.image.url}
                        alt='Imagen de la receta'
                        style={{ objectFit: 'cover' }}
                        fill
                        priority
                      />
                      {session ? (
                        loggedUserIsLoading ? (
                          <Loading />
                        ) : (
                          <BsBookmarkFill
                            className={
                              recipe.saved.includes(user.username)
                                ? styles.marked__save__button
                                : styles.unmarked__save__button
                            }
                            onClick={saveHandler}
                          />
                        )
                      ) : (
                        <BsBookmarkFill
                          className={styles.disabled__save__button}
                        />
                      )}
                      <p className={styles.saved__count}>
                        {recipe.likes.length > 1000
                          ? `${recipe.saved.length / 1000}k`
                          : recipe.saved.length}
                      </p>
                      {session ? (
                        loggedUserIsLoading ? (
                          <Loading />
                        ) : (
                          <BsHeartFill
                            className={
                              recipe.likes.includes(user.username)
                                ? styles.marked__like__button
                                : styles.unmarked__like__button
                            }
                            onClick={likeHandler}
                          />
                        )
                      ) : (
                        <BsHeartFill
                          className={styles.disabled__like__button}
                        />
                      )}
                      <p className={styles.likes__count}>
                        {recipe.likes.length > 1000
                          ? `${recipe.likes.length / 1000}k`
                          : recipe.likes.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.middle__section}>
                <div className={styles.left__subsection}>
                  <div className={styles.field} data-testid='form-field'>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <p className={styles.field__title}>Ingredientes</p>
                      <p style={{ fontWeight: 'bold' }}>
                        <BsFillPersonFill className={styles.rations__icon} />
                        {recipe.rations}
                      </p>
                    </div>
                    <div>
                      {recipe.ingredients.map(
                        (ingredient: Ingredient, index: number) => (
                          <div key={index}>
                            <div className={styles.ingredient}>
                              <p>
                                {ingredient.quantity} {ingredient.unit} de{' '}
                                {ingredient.name}
                              </p>
                            </div>
                            {index < recipe.ingredients.length - 1 && <hr />}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.right__subsection}>
                  <div className={styles.field} data-testid='form-field'>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <p className={styles.field__title}>Pasos</p>
                    </div>
                    <div>
                      {recipe.instructions.map(
                        (instruction: Instruction, index: number) => (
                          <div key={index}>
                            <div className={styles.instruction}>
                              <div className={styles.instruction__number}>
                                {index + 1}
                              </div>
                              <p className={styles.step}>{instruction.step}</p>
                            </div>
                            {index < recipe.instructions.length - 1 && <hr />}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bottom__section}>
                <div className={styles.field} data-testid='form-field'>
                  <div className={styles.valorations__header}>
                    <p className={styles.field__title}>
                      Valoraciones y reseñas&nbsp;&nbsp;&middot;&nbsp;&nbsp;
                      {recipe.valorations.length} valoraciones
                    </p>
                    {session &&
                      !show &&
                      !isAlreadyValorated(recipe.valorations) &&
                      (loggedUserIsLoading ? (
                        <Loading />
                      ) : (
                        <Button style={styles.add__button} onClick={toggleShow}>
                          <BiEditAlt />
                          Escribir&nbsp;reseña
                        </Button>
                      ))}
                    {session &&
                      isAlreadyValorated(recipe.valorations) &&
                      (loggedUserIsLoading ? (
                        <Loading />
                      ) : (
                        <Button
                          style={styles.delete__button}
                          onClick={valorationHandler}
                        >
                          <BsFillTrashFill />
                          Eliminar reseña
                        </Button>
                      ))}
                  </div>
                  <div className={styles.valoration__mean}>
                    <p className={styles.mean}>
                      {getAverageRating(recipe.valorations)}
                    </p>
                    <ReactStars
                      count={5}
                      size={30}
                      color2='#F5A524'
                      value={getAverageRating(recipe.valorations)}
                      edit={false}
                    />
                  </div>
                  {show && (
                    <div className={styles.review__container}>
                      <div className={styles.header}>
                        <div className={styles.rating}>
                          <p className={styles.rating__msg}>
                            Toca una estrella para valorar:
                          </p>
                          <ReactStars
                            className={styles.rating__input}
                            count={5}
                            size={24}
                            color2='#F5A524'
                            value={rating}
                            onChange={(value) => setRating(value)}
                          />
                        </div>
                        <div className={styles.review__buttons}>
                          <Button
                            style={styles.send__button}
                            onClick={valorationHandler}
                            disabled={reviewTitle ? false : true}
                          >
                            Enviar
                          </Button>
                        </div>
                      </div>
                      <button
                        className={styles.close__button}
                        onClick={toggleShow}
                      >
                        <IoClose size={20} />
                      </button>
                      <input
                        className={styles.comment__input}
                        type='text'
                        placeholder='Título'
                        onChange={titleHandler}
                      />
                      <textarea
                        className={styles.comment__input}
                        placeholder='Reseña (opcional)'
                        onChange={commentHandler}
                        rows={2}
                        style={{ resize: 'none', height: 'auto' }}
                      />
                    </div>
                  )}
                  {/* <div>
                    {recipe.valorations.map(
                      (valoration: Valoration, index: number) => (
                        <div key={index}>
                          <Review valoration={valoration} />
                          {index < recipe.valorations.length - 1 && <hr />}
                        </div>
                      )
                    )}
                  </div> */}
                </div>
              </div>
            </>
          )
        )}
      </div>
    </Card>
  );
};

export default RecipePage;
