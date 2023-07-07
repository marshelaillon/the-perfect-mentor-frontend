import { useEffect } from 'react';
import { Form, Field } from 'formik';

import { useGetCountriesQuery } from '../../../services/restCountriesApi';

import '../../../styles/selectArrow.css';

export default function UserDataContainer({
  values,
  profilePic,
  roles,
  AreRolesSucceeded,
  isEditing,
  touched,
  handleChange,
  handleBlur,
  errors,
}) {
  const { data: countries, isSuccess } = useGetCountriesQuery();

  return (
    <div className="user-data-container w-full flex-grow flex">
      <div className="bg-white rounded-t-2xl relative mx-4 flex-grow shadow">
        <Form className="flex flex-col p-4 form-shadow" id="profile-form">
          <img
            src={profilePic}
            alt="profile picture"
            className="absolute profile-pic"
          />

          <label htmlFor="name" className="text-sm text-primary-gray mt-10">
            Your name
          </label>
          <Field
            className="mb-4 shadow font-bold text-primary-dark outline-none"
            id="name"
            type="text"
            disabled={!isEditing}
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.requiredName && (
            <p className="py-2 px-5 text-red-500 text-xs">
              {errors.requiredName}
            </p>
          )}

          <label htmlFor="name" className="text-sm text-primary-gray">
            Your lastname
          </label>
          <Field
            className="mb-4 shadow font-bold text-primary-dark outline-none"
            id="lastname"
            type="text"
            disabled={!isEditing}
            name="lastname"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.name && errors.requiredName && (
            <p className="py-2 px-5 text-red-500 text-xs">
              {errors.requiredLastname}
            </p>
          )}

          <label htmlFor="email" className="text-sm text-primary-gray">
            Your email
          </label>
          <Field
            className="mb-4 shadow font-bold text-primary-dark outline-none"
            id="email"
            type="email"
            name="email"
            disabled={true}
          />

          <label htmlFor="occupation" className="text-sm text-primary-gray">
            Your occuppation
          </label>
          <Field
            className="mb-4 shadow font-bold text-primary-dark outline-none"
            id="occupation"
            type="text"
            name="occupation"
            disabled={!isEditing}
          />

          <label htmlFor="description" className="text-sm text-primary-gray">
            Your description
          </label>
          <Field
            className="mb-4 shadow font-bold text-primary-dark outline-none"
            id="description"
            type="text"
            name="description"
            disabled={!isEditing}
          />

          <label htmlFor="role" className="text-sm text-primary-gray">
            Country
          </label>
          <Field
            as="select"
            name="residence_country"
            id="residence_country"
            className="bg-primary-yellow py-3 px-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray select-arrow mt-1"
            disabled={!isEditing}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.residence_country}
          >
            {isSuccess &&
              [...countries]
                .sort((a, b) => a.name.common.localeCompare(b.name.common))
                .map(({ name }) => (
                  <option key={name.official} value={name.common}>
                    {name.common}
                  </option>
                ))}
          </Field>

          <label htmlFor="role" className="text-sm text-primary-gray">
            Role
          </label>
          <Field
            as="select"
            name="role"
            id="role"
            className="bg-primary-yellow py-3 px-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray select-arrow mt-1"
            disabled={!isEditing}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.role}
          >
            {AreRolesSucceeded &&
              roles.map(({ _id, name }) => (
                <option key={_id} value={_id}>
                  {name[0].toUpperCase() + name.slice(1)}
                </option>
              ))}
          </Field>
        </Form>
      </div>
    </div>
  );
}

/*
  languages: user?.languages || [],
  skills: user?.skills || [],
*/
