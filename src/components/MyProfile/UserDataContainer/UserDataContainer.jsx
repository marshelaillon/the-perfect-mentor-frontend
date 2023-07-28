import { Form, Field, FieldArray } from 'formik';
import Select from 'react-select';

import { useGetCountriesQuery } from '../../../services/restCountriesApi';

import { techRoles } from '../../../data/techRoles.json';
import { techSkills } from '../../../data/techSkills.json';
import { languages } from '../../../data/languages.json';
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

          {/* OCCUPATIONS */}
          <label htmlFor="occupation" className="text-sm text-primary-gray">
            Your occuppation
          </label>
          <Field
            as="select"
            name="occupation"
            id="occupation"
            className="bg-primary-yellow py-3 px-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray select-arrow mt-1"
            disabled={!isEditing}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.occupation}
          >
            {techRoles.map(({ roleName }) => (
              <option key={roleName} value={roleName}>
                {roleName}
              </option>
            ))}
          </Field>

          {/* LANGUAGES */}
          <label htmlFor="languages" className="text-sm text-primary-gray">
            Languages
          </label>
          <FieldArray name="languages">
            {({ form }) => (
              <div className="bg-primary-yellow py-3 px-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray select-arrow mt-1">
                <Select
                  isMulti
                  isDisabled={!isEditing}
                  onChange={selectedOptions => {
                    const selectedLanguages =
                      selectedOptions?.map(option => option.value) || [];
                    form.setFieldValue('languages', selectedLanguages);
                  }}
                  onBlur={form.handleBlur}
                  value={
                    values.languages
                      ? values.languages.map(langName => ({
                          value: langName,
                          label: langName,
                        }))
                      : []
                  }
                  options={languages.map(({ langName }) => ({
                    value: langName,
                    label: langName,
                  }))}
                  styles={{
                    control: (baseStyles, state) => ({
                      border: state.isFocused ? 'none' : 'none',
                      boxShadow: state.isFocused ? 'none' : 'none',
                      borderColor: state.isFocused ? 'none' : 'none',
                    }),
                    indicatorsContainer: (baseStyles, state) => ({
                      ...baseStyles,
                      display: 'none', // Ocultar flecha hacia abajo
                    }),
                    valueContainer: baseStyles => ({
                      ...baseStyles,
                      paddingLeft: '0',
                    }),
                    multiValueRemove: (baseStyles, state) => ({
                      ...baseStyles,
                      ':hover': {
                        backgroundColor: '#bfd732',
                        color: '#f5f6f7',
                      },
                    }),
                  }}
                />
                {form.touched.languages && form.errors.languages && (
                  <p className="py-2 px-5 text-red-500 text-xs">
                    {form.errors.languages}
                  </p>
                )}
              </div>
            )}
          </FieldArray>

          {/* SKILLS */}
          <label htmlFor="occupation" className="text-sm text-primary-gray">
            Skills
          </label>
          <FieldArray
            name="skills"
            className="bg-primary-yellow py-3 px-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray select-arrow mt-1"
          >
            {({ form }) => (
              <div className="bg-primary-yellow py-3 px-8 outline-none bg-transparent border-2 border-primary-dark placeholder-primary-gray rounded-full text-primary-gray select-arrow mt-1">
                <Select
                  isMulti
                  isDisabled={!isEditing}
                  onChange={selectedOptions => {
                    const selectedSkills =
                      selectedOptions?.map(option => option.value) || [];
                    form.setFieldValue('skills', selectedSkills);
                  }}
                  onBlur={form.handleBlur}
                  value={
                    values.skills
                      ? values.skills.map(skillName => ({
                          value: skillName,
                          label: skillName,
                        }))
                      : []
                  }
                  options={techSkills.map(({ skillName }) => ({
                    value: skillName,
                    label: skillName,
                  }))}
                  styles={{
                    control: (baseStyles, state) => ({
                      border: state.isFocused ? 'none' : 'none',
                      boxShadow: state.isFocused ? 'none' : 'none',
                      borderColor: state.isFocused ? 'none' : 'none',
                    }),
                    indicatorsContainer: (baseStyles, state) => ({
                      ...baseStyles,
                      display: 'none', // Ocultar flecha hacia abajo
                    }),
                    valueContainer: baseStyles => ({
                      ...baseStyles,
                      paddingLeft: '0',
                    }),
                    multiValueRemove: (baseStyles, state) => ({
                      ...baseStyles,
                      ':hover': {
                        backgroundColor: '#bfd732',
                        color: '#f5f6f7',
                      },
                    }),
                  }}
                />
                {form.touched.languages && form.errors.languages && (
                  <p className="py-2 px-5 text-red-500 text-xs">
                    {form.errors.languages}
                  </p>
                )}
              </div>
            )}
          </FieldArray>

          {/* ROLE */}
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
