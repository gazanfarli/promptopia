import dynamic from "next/dynamic";
import PromptLoading from "./loading-skeleton/PromptLoading";

const DynamicPromptCard = dynamic(() => import('./PromptCard'), {
  loading: () => <PromptLoading />
})

const PromptCardList = ({ data, handleEdit, handleDelete, handleTagClick }) => {
  return (
    <div className='mt-16 mb-16 prompt_layout'>
      {data.map((post) => (
        <DynamicPromptCard
          key={post._id}
          post={post}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
};

const Profile = ({
  name,
  desc,
  data,
  loading,
  handleEdit,
  handleDelete
}) => {

  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>
      {loading ? (
        <div className='prompt_layout mt-16'>
          {Array(6).fill(<PromptLoading />)}
        </div>
      ) : (
        <PromptCardList
          data={data}
          handleTagClick={() => { }}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          loading={loading}
        />
      )}
    </section>
  )
}

export default Profile