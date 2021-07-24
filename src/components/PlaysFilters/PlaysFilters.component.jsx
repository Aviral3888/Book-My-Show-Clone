import { Disclosure } from '@headlessui/react';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';

const PlaysFilter = (props) => {
    return (
        <Disclosure>
            {
                ({ open }) =>
                    <>
                        <div className="bg-gray-100 p-2 rounded-sm shadow-lg ">

                            <Disclosure.Button className="py-2 flex items-center gap-3" >
                                {open ? <BiChevronUp /> : <BiChevronDown />}  <span className={open ? "text-red-700" : "text-gray-700"}>
                                    {props.title}
                                </span>

                            </Disclosure.Button>
                            <Disclosure.Panel>
                                <div className="flex items-center gap-3 flex-wrap mb-3">
                                    {
                                        props.tags.map((tag) =>
                                            <>
                                                <div className="border-2 border-gray-300 py-1 px-2">
                                                    <span className="text-red-600">{tag}</span>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </Disclosure.Panel>

                        </div>
                    </>
            }
        </Disclosure>
    )
};

export default PlaysFilter;
